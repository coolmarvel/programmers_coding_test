const solution = (score) => {
  const avgs = score.map(([a, b]) => (a + b) / 2);
  const avgRank = [...avgs]
    .sort((a, b) => b - a)
    .map((avg, i) => ({ avg, rank: i + 1 }))
    .map((a, i, arr) =>
      i > 0 && a.avg === arr[i - 1].avg ? { ...a, rank: arr[i - 1].rank } : a
    );
  console.log(avgRank);

  const answer = avgs.map(
    (_avg) => avgRank.find(({ avg }) => _avg === avg).rank
  );
  console.log(answer);

  return answer;
};

const solution2 = (score) => {
  const answer = score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
  console.log(answer);

  return answer;
};

solution([
  [80, 70],
  [90, 50],
  [40, 70],
  [50, 80],
]);
solution([
  [80, 70],
  [70, 80],
  [30, 50],
  [90, 100],
  [100, 90],
  [100, 100],
  [10, 30],
]);

solution2([
  [80, 70],
  [90, 50],
  [40, 70],
  [50, 80],
]);
solution2([
  [80, 70],
  [70, 80],
  [30, 50],
  [90, 100],
  [100, 90],
  [100, 100],
  [10, 30],
]);
