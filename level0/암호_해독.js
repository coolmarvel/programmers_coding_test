const solution = (cipher, code) => {
  const str = [...cipher];
  const answer = str.reduce(
    (a, c, i) => ((i + 1) % code === 0 ? a + c : a),
    ""
  );
  console.log(answer);

  return answer;
};

const solution2 = (cipher, code) => {
  const answer = [];
  for (let i = code - 1; i < cipher.length; i += code) {
    answer.push(cipher[i]);
  }
  console.log(answer.join(""));

  return answer.join("");
};

const solution3 = (cipher, code) => {
  const answer = cipher
    .split("")
    .filter((v, i) => (i + 1) % code === 0)
    .join("");
  console.log(answer);

  return answer;
};

solution("dfjardstddetckdaccccdegk", 4);
solution("pfqallllabwaoclk", 2);

solution2("dfjardstddetckdaccccdegk", 4);
solution2("pfqallllabwaoclk", 2);

solution3("dfjardstddetckdaccccdegk", 4);
solution3("pfqallllabwaoclk", 2);
