const solution = (n, t) => {
  const answer = n * 2 ** t;
  console.log(answer);

  return answer;
};

const solution2 = (n, t) => {
  console.log(n << t);

  return n << t;
};

const solution3 = (n, t) => {
  while (t-- > 0) {
    n *= 2;
  }

  console.log(n);
  return n;
};

const solution4 = (n, t) => {
  const answer = n * Math.pow(2, t);
  console.log(answer);

  return answer;
};

solution(2, 10);
solution(7, 15);

solution2(2, 10);
solution2(7, 15);

solution3(2, 10);
solution3(7, 15);

solution4(2, 10);
solution4(7, 15);
