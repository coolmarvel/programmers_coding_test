const solution = (array) => {
  const answer = [...array.join("")].filter((v) => v === "7").length;

  console.log(answer);
  return answer;
};

const solution2 = (array) => {
  const answer = array.join("").split("7").length - 1;

  console.log(answer);
  return answer;
};

solution([7, 77, 17]);
solution([10, 29]);

solution2([7, 77, 17]);
solution2([10, 29]);
