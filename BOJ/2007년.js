const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [x, y] = input[0].split(" ").map(Number);

const monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const yoil = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let day = 0;

// x월 전월까지의 일수 더하기
for (let i = 1; i < x; i++) {
  day += monthDays[i];
}

// y일까지의 일수 더하기
day += y;

// 7로 나눈 나머지로 요일 계산
console.log(yoil[day % 7]);
