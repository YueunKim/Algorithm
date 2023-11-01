const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const visited = new Array(N + 1).fill(false); // 방문 여부를 저장할 배열
const output = [];

function dfs(depth) {
  if (depth === M) {
    // M개를 모두 선택한 경우 출력
    console.log(output.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true; // i번째 숫자를 선택했다고 체크
      output.push(i); // 결과 배열에 i를 추가
      dfs(depth + 1); // 다음 깊이로 넘어가기
      visited[i] = false; // 이전 상태로 되돌리기 (백트래킹)
      output.pop(); // 결과 배열에서 마지막 요소 제거
    }
  }
}

dfs(0);
