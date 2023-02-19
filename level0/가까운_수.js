const solution = (array, n) => {
  const minDiff = Math.min(...array.map((v) => Math.abs(v - n)));
  console.log(minDiff);

  const answer = array
    .sort((a, b) => a - b)
    .find((a) => Math.abs(a - n) === minDiff);
  console.log(answer);

  return answer;
};

solution([3, 10, 28], 20);
solution([10, 11, 12], 13);
