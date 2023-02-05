const solution = (num, k) => {
  const answer = [...("" + num)].findIndex((v) => +v === k);
  console.log(answer);

  return answer === -1 ? -1 : answer + 1;
};

const solution2 = (num, k) => {
  const answer = num.toString();
  if (answer.includes(k)) {
    return answer.indexOf(k) + 1;
  } else {
    return -1;
  }
};

solution(29183, 1);
solution(232443, 4);
solution(123456, 7);

solution2(29183, 1);
solution2(232443, 4);
solution2(123456, 7);
