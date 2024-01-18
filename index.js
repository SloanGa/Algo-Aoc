import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const part1 = (data) => {
  const fishes = test.split(",");
  return fishes;
  //   console.log(fishes);
};
console.log(part1(test));
