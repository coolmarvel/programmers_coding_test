const solution = (lines) => {
  const answer = lines.reduce((a, [x, y]) => {
    for (let i = Math.min(x, y) + 1; i <= Math.max(x, y); i++)
      a[i] = a[i] ? a[i] + 1 : 1;
    return a;
  }, {});
  console.log(Object.values(answer).filter((v) => v > 1).length);

  return Object.values(answer).filter((v) => v > 1).length;
};

const solution2 = (lines) => {
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100]++;
  });

  const answer = line.reduce((a, c) => (c > 1 ? a + 1 : a), 0);
  console.log(answer);

  return answer;
};

solution([
  [0, 1],
  [2, 5],
  [3, 9],
]);
solution([
  [-1, 1],
  [1, 3],
  [3, 9],
]);
solution([
  [0, 5],
  [3, 9],
  [1, 10],
]);

solution2([
  [0, 1],
  [2, 5],
  [3, 9],
]);
solution2([
  [-1, 1],
  [1, 3],
  [3, 9],
]);
solution2([
  [0, 5],
  [3, 9],
  [1, 10],
]);
