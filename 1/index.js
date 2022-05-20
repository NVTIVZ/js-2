import { first } from "../data.js";
import { map, reduce } from "ramda";

const solve = (data) => ({
  totalScore: reduce(
    (previousValue, currentValue) => previousValue + currentValue.score,
    0,
    data
  ),
  names: map(({ name }) => name)(data),
});

console.log(solve(...first));
