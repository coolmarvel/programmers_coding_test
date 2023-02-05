const solution = (quiz) => {
  const answer = quiz.map((v) => {
    const [formula, answer] = v.split("=");

    return eval(formula) === +answer ? "O" : "X";
  });
  console.log(answer);

  return answer;
};

solution(["3 - 4 = -3", "5 + 6 = 11"]);
solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]);
