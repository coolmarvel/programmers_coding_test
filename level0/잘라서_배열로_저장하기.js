const solution = (my_str, n) => {
  const answer = [];
  for (let i = 0; i < my_str.length / n; i++) {
    answer.push(my_str.slice(i * n, i * n + n));
  }
  console.log(answer);

  return answer;
};

const solution2 = (my_str, n) => {
  const answer = my_str.match(new RegExp(`.{1,${n}}`, "g")); // 정규식 이용
  console.log(answer);

  return answer;
};

solution("abc1Addfggg4556b", 6);
solution("abcdef123", 3);

solution2("abc1Addfggg4556b", 6);
solution2("abcdef123", 3);
