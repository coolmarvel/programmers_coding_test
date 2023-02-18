const solution = (s) => {
  const count = [...s].reduce(
    (a, c) => (a[c] ? { ...a, [c]: a[c] + 1 } : { ...a, [c]: 1 }),
    {}
  );
  console.log(count);
  const answer = Object.keys(count)
    .filter((key) => count[key] === 1)
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
    .join("");
  console.log(answer);

  return answer;
};

const solution2 = (s) => {
  let answer = [];
  for (const v of s) {
    if (s.indexOf(v) === s.lastIndexOf(v)) {
      answer.push(v);
    }
  }
  answer.sort().join("");
  console.log(answer);

  return answer;
};

solution("abcabcadc");
solution("abdc");
solution("hello");

solution2("abcabcadc");
solution2("abdc");
solution2("hello");
