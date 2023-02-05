function solution(n) {
  let answer = [];
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      answer = [...answer, i, n / i];
    }
  }
  if (Number.isInteger(Math.sqrt(n))) {
    answer = [...answer, Math.sqrt(n)];
  }
  console.log(answer);
  return answer.sort((a, b) => a - b);
}

function solution2(n) {
  const answer = Array(n)
    .fill(0)
    .map((v, i) => v + i + 1)
    .filter((v) => n % v === 0);
  console.log(answer);

  return answer;
}

solution(24);
solution(29);

solution2(24);
solution2(29);
