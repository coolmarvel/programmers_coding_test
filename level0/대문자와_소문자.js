const solution = (my_string) => {
  const str = [...my_string];
  console.log(str);
  const answer = str
    .map((v) => (v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
    .join("");
  console.log(answer);

  return answer;
};

const solution2 = (my_string) => {
  let answer = "";
  for (const str of my_string) {
    answer += str === str.toLowerCase() ? str.toUpperCase() : str.toLowerCase();
  }
  console.log(answer);

  return answer;
};

solution("cccCCC");
solution("abCdEfghIJ");

solution2("cccCCC");
solution2("abCdEfghIJ");
