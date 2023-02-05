const solution = (array) => {
  const answer = Math.max(...array);
  console.log(answer);
  const index = array.indexOf(answer);
  console.log(index);

  return [answer, index];
};

solution([1, 8, 3]);
solution([9, 10, 11, 8]);
