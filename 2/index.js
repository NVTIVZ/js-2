import { first } from "../data.js";

import {
  __,
  add,
  divide,
  flatten,
  identity,
  map,
  multiply,
  pipe,
  prop,
  reduce,
} from "ramda";

const names = pipe(flatten, map(prop("name")))(first);

const getRandomName = () =>
  names[pipe(multiply(prop("length")(names)), Math.floor)(Math.random())];

const getRandomTimeout = () => pipe(add(1), multiply(1000))(Math.random());

const getRandomScore = () => pipe(multiply(20), Math.floor)(Math.random());

const generateRandomNames = (length) =>
  Array.from({ length }, () => identity(getRandomName()));

const delay = () =>
  new Promise((resolve) => setTimeout(resolve, getRandomTimeout()));

const getPromise = async (nameFn, resolveFn) => {
  await delay();
  return new Promise((resolve, reject) => {
    if (getRandomScore() <= 2) {
      reject(`${nameFn} network error`);
    }
    resolve(resolveFn);
  });
};

const getPlayers = (players) =>
  getPromise("getPlayers", generateRandomNames(players));

const getTeams = (teams, players) =>
  getPromise(
    "getTeams",
    Array.from({ length: teams }, () => ({
      names: generateRandomNames(players),
      score: getRandomScore(),
    }))
  );

const getTeamSummaries = async (receivedPromise) => {
  const teams = await receivedPromise;
  return await getPromise("getTeamSummaries", {
    averageScore: pipe(
      reduce(
        (previousValue, currentValue) =>
          previousValue + prop("score")(currentValue),
        0
      ),
      divide(__, prop("length")(teams))
    )(teams),
    names: pipe(map(prop("names")), flatten)(teams),
  });
};

getPlayers(500).then(console.log).catch(console.error);
getTeams(500, 2).then(console.log).catch(console.error);
getTeamSummaries(getTeams(500, 2)).then(console.log).catch(console.error);
