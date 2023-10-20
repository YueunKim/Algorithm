let fees = [120, 0, 60, 591];
let records = [
  "16:00 3961 IN",
  "16:00 0202 IN",
  "18:00 3961 OUT",
  "18:00 0202 OUT",
  "23:58 3961 IN",
];

function solution(fees, records) {
  let answer = [];

  // 이중 배열로 저장
  let arr = [];
  for (let i = 0; i < records.length; i++) {
    const [time, number, act] = records[i].split(" ");
    arr.push([time, Number(number), act]);
  }
  // 기록 오름차순 정렬
  const record = arr.sort((a, b) => a[1] - b[1]);

  // 차량 번호만 추출 및 오름차순 정렬
  const cars = Array.from(new Set(arr.map((item) => item[1]))).sort(
    (a, b) => a - b
  );

  // 누적 주차 시간 계산
  for (let car of cars) {
    let minutes = 0;
    for (i = 0; i < record.length; ) {
      if (record[i][1] === car) {
        // 출차도 한 경우
        if (i < record.length - 1 && record[i + 1][1] === car) {
          minutes +=
            Number(record[i + 1][0].slice(0, 2)) * 60 +
            Number(record[i + 1][0].slice(3, 5)) -
            (Number(record[i][0].slice(0, 2)) * 60 +
              Number(record[i][0].slice(3, 5)));
          i += 2;
          // 입차만 한 경우
        } else {
          minutes +=
            1439 -
            (Number(record[i][0].slice(0, 2)) * 60 +
              Number(record[i][0].slice(3, 5)));
          i++;
        }
      } else {
        i++;
      }
    }
    // 주차 요금 계산
    if (minutes < fees[0]) {
      answer.push(fees[1]);
    } else {
      let fee = fees[1] + Math.ceil((minutes - fees[0]) / fees[2]) * fees[3];
      answer.push(fee);
    }
  }

  return answer;
}

console.log(solution(fees, records));
