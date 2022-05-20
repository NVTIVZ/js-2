import { first } from "../data.js";

import { flatten, map, pipe, reduce } from "ramda";

const names = pipe(
  flatten,
  map(({ name }) => name)
)(first);
const getRandomName = () => names[Math.floor(Math.random() * names.length)];
const getRandomTimeout = () => (Math.random() + 1) * 1000;
const getRandomScore = () => Math.floor(Math.random() * 20);
const delay = () =>
  new Promise((resolve) => setTimeout(resolve, getRandomTimeout()));

const getPromise = async (nameFn, resolveFn) => {
  await delay();
  return new Promise((resolve, reject) => {
    if (getRandomScore() <= 10) {
      reject(`${nameFn} network error`);
    }
    resolve(resolveFn);
  });
};

const getPlayers = (players) =>
  getPromise(
    "getPlayers",
    Array.from({ length: players }, () => getRandomName())
  );

const getTeams = (teams, players) =>
  getPromise(
    "getTeams",
    Array.from({ length: teams }, () => ({
      names: Array.from({ length: players }, () => getRandomName()),
      score: getRandomScore(),
    }))
  );

const getTeamSummaries = async (receivedPromise) => {
  const teams = await receivedPromise;
  return await getPromise("getTeamSummaries", {
    averageScore:
      reduce(
        (previousValue, currentValue) => previousValue + currentValue.score,
        0,
        teams
      ) / teams.length,
    names: pipe(
      map(({ names }) => names),
      flatten
    )(teams),
  });
};

getPlayers(500).then(console.log).catch(console.error);
getTeams(500, 2).then(console.log).catch(console.error);
getTeamSummaries(getTeams(500, 2)).then(console.log).catch(console.error);
