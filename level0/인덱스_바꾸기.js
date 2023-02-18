const solution = (my_string, num1, num2) => {
  const str = [...my_string];
  console.log(str);

  [str[num1], str[num2]] = [str[num2], str[num1]];

  const answer = str.join("");
  console.log(answer);

  return answer;
};

const solution2 = (my_string, num1, num2) => {
  const str = [];
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (i === num1 || i === num2) {
      str.push(my_string[i]);
    }
  }
  console.log(str);

  for (let i = 0; i < my_string.length; i++) {
    if (i === num1) {
      answer += str[1];
    } else if (i === num2) {
      answer += str[0];
    } else {
      answer += my_string[i];
    }
  }
  console.log(answer);

  return answer;
};

solution("hello", 1, 2);
solution("I love you", 3, 6);

solution2("hello", 1, 2);
solution2("I love you", 3, 6);
