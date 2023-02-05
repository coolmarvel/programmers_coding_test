const solution = (message) => {
  const answer = message.split("").length * 2;
  console.log(answer);

  return answer;
};

const solution2 = (message) => {
  const answer = [...message].length * 2;
  console.log(answer);

  return answer;
};

const solution3 = (message) => {
  const answer = message.length * 2;
  console.log(answer);

  return answer;
};

solution("happy birthday!");
solution("I love you~");

solution2("happy birthday!");
solution2("I love you~");

solution3("happy birthday!");
solution3("I love you~");
