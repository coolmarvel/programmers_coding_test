const solution = (my_string) => {
  const nums = my_string.match(/[0-9]+/g);

  const answer = nums ? nums.map((num) => +num).reduce((a, c) => a + c, 0) : 0;
  console.log(answer);

  return answer;
};

solution("aAb1B2cC34oOp");
solution("1a2b3c4d123Z");
