const solution = (my_string) => {
  const answer = [...my_string]
    .map((v) => v.toLowerCase())
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
    .join("");

  console.log(answer);
  return answer;
};

solution("Bcad");
solution("heLLo");
solution("Python");
