import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const part1 = (data) => {
  const years = 80;
  const fishes = final.split(",").map(Number);

  for (let year = 0; year < years; year++) {
    const saveLength = fishes.length;
    for (let i = 0; i < saveLength; i++) {
      if (fishes[i] === 0) {
        fishes[i] = 6;
        fishes.push(8);
      } else {
        fishes[i]--;
      }
    }
  }
  return fishes;
};

const result = part1(test);
console.log(result.length);
