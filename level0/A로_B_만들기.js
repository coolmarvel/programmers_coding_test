const solution = (before, after) => {
  const sort = (str) =>
    [...str].sort((a, b) => (a < b ? -1 : a !== b ? 1 : 0)).join("");

  const answer = sort(before) === sort(after) ? 1 : 0;
  console.log(answer);

  return answer;
};

const solution2 = (before, after) => {
  const answer =
    before.split("").sort().join("") === after.split("").sort().join("")
      ? 1
      : 0;
  console.log(answer);

  return answer;
};

solution("olleh", "hello");
solution("allpe", "apple");

solution2("olleh", "hello");
solution2("allpe", "apple");
