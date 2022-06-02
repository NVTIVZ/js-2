import { first } from "../data.js";
import { map, prop, reduce } from "ramda";

const solve = (data) => ({
  totalScore: reduce(
    (previousValue, currentValue) =>
      previousValue + prop("score")(currentValue),
    0,
    data
  ),
  names: map(prop("name"))(data),
});

console.log(solve(...first));
