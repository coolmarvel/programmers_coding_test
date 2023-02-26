const solution = (numlist, n) => {
  const answer = numlist.sort((a, b) => {
    const [x, y] = [Math.abs(a - n), Math.abs(b - n)];
    if (x === y) return b - a;
    return x - y;
  });
  console.log("answer ", answer);
  return answer;
};

solution([1, 2, 3, 4, 5, 6], 4);
solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30);
