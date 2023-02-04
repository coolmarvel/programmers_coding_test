const solution = (n) => {
  const answer = Number.isInteger(Math.sqrt(n)) ? 1 : 2;
  console.log(answer);

  return answer;
};

solution(144);
solution(976);
