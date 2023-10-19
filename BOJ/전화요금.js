const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
let arr = [];
let fee = 0;

for (let i = 1; i <= n; i++) {
  const [call, time] = input[i].split(" ");
  const [callHour, callMinute] = call.split(":").map(Number);
  arr.push([callHour, callMinute, Number(time)]);
}

for (let i = 0; i < arr.length; i++) {
  // 7:00부터 19:00까지
  if (arr[i][0] >= 7 && arr[i][0] < 19) {
    if (arr[i][0] === 18 && arr[i][1] + arr[i][2] >= 60) {
      fee += (arr[i][1] + arr[i][2] - 60) * 5;
      fee += (60 - arr[i][1]) * 10;
    } else {
      fee += arr[i][2] * 10;
    }
    // 19:00부터 7:00까지
  } else {
    if (arr[i][0] === 6 && arr[i][1] + arr[i][2] >= 60) {
      fee += (arr[i][1] + arr[i][2] - 60) * 10;
      fee += (60 - arr[i][1]) * 5;
    } else {
      fee += arr[i][2] * 5;
    }
  }
}

console.log(fee);
