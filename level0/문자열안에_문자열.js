const solution = (str1, str2) => {
  const answer = str1.includes(str2) ? 1 : 2;
  console.log(answer);

  return answer;
};

const solution2 = (str1, str2) => {
  const answer = str1.split(str2).length > 1 ? 1 : 2;
  console.log(answer);

  return answer;
};

solution("ab6CDE443fgh22iJKlmn1o", "6CD");
solution("ppprrrogrammers", "pppp");
solution("AbcAbcA", "AAA");

solution2("ab6CDE443fgh22iJKlmn1o", "6CD");
solution2("ppprrrogrammers", "pppp");
solution2("AbcAbcA", "AAA");
