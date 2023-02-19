const solution = (order) => {
  const str = [...("" + order)].filter(
    (v) => v === "3" || v === "6" || v === "9"
  );

  const answer = str.length;
  console.log(answer);

  return answer;
};

const solution2 = (order) => {
  const answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  console.log(answer);

  return answer;
};

const solution3 = (order) => {
  const set = new Set([3, 6, 9]);
  const answer = String(order)
    .split("")
    .filter((v) => set.has(Number(v))).length;
  console.log(answer);

  return answer;
};

solution(3);
solution(29423);

solution2(3);
solution2(29423);

solution3(3);
solution3(29423);
