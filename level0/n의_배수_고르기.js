const solution = (n, numlist) => {
  const answer = [];
  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n === 0) {
      answer.push(numlist[i]);
    }
  }
  console.log(answer);

  return answer;
};

const solution2 = (n, numlist) => {
  const answer = numlist.filter((v) => v % n === 0);
  console.log(answer);

  return answer;
};

solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]);
solution(5, [1, 9, 3, 10, 13, 5]);
solution(12, [2, 100, 120, 600, 12, 12]);

solution2(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]);
solution2(5, [1, 9, 3, 10, 13, 5]);
solution2(12, [2, 100, 120, 600, 12, 12]);
