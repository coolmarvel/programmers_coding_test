const solution = (sides) => {
  const max = Math.max(...sides);
  const answer = max < sides.reduce((a, c) => a + c, 0) - max ? 1 : 2;
  console.log(answer);

  return answer;
};

const solution2 = (sides) => {
  sides = sides.sort((a, b) => a - b);
  const answer = sides[0] + sides[1] > sides[2] ? 1 : 2;
  console.log(answer);

  return answer;
};

solution([1, 2, 3]);
solution([3, 6, 2]);
solution([199, 72, 222]);

solution2([1, 2, 3]);
solution2([3, 6, 2]);
solution2([199, 72, 222]);
