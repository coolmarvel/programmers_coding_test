const solution = (dots) => {
  const getInclination = ([[x1, y1], [x2, y2]]) =>
    x2 !== x1 ? (y2 - y1) / (x2 - x1) : Infinity;

  const isParallel = (line1, line2) =>
    getInclination(line1) === getInclination(line2);

  const answer = dots.some((dot) => {
    const line1 = [dots[0], dot];
    const line2 = dots.filter((dot) => !line1.includes(dot));
    return isParallel(line1, line2);
  })
    ? 1
    : 0;
  console.log(answer);

  return answer;
};

const solution2 = (dots) => {
  const calculateSlope = (arr1, arr2) => {
    return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
  };

  if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3])) {
    return 1;
  } else if (
    calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3])
  ) {
    return 1;
  } else if (
    calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2])
  ) {
    return 1;
  } else {
    return 0;
  }
};

solution([
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
]);
solution([
  [3, 5],
  [4, 1],
  [2, 4],
  [5, 10],
]);

solution2([
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
]);
solution2([
  [3, 5],
  [4, 1],
  [2, 4],
  [5, 10],
]);
