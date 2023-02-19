const solution = (a, b, c) => {
  let answer = 0;
  for (let i = a; i <= b; i++) {
    answer += [...("" + i)].filter((v) => +v === c).length;
  }
  console.log(answer);

  return answer;
};

solution(1, 13, 1);
solution(10, 50, 5);
solution(3, 10, 2);

