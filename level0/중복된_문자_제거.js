const solution = (my_string) => {
  const str = [...my_string];

  let answer = [];
  for (let i = 0; i < str.length; i++) {
    if (!answer.includes(str[i])) {
      answer.push(str[i]);
    } else {
      continue;
    }
  }
  console.log(answer.join(""));

  return answer.join("");
};

function solution2(my_string) {
  return [...new Set(my_string)].join("");
}

solution("people");
solution("We are the world");
