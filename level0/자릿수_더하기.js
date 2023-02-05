const solution = (n) => {
  const answer = [...("" + n)].map((v) => +v).reduce((x, y) => x + y, 0);
  console.log(answer);

  return answer;
};

const solution2 = (n) => {
  const answer = n
    .toString()
    .split("")
    .reduce((x, y) => x + Number(y), 0);
  console.log(answer);

  return answer;
};

solution(1234);
solution(930211);

solution2(1234);
solution2(930211);
