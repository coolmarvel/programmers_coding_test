const solution = (A, B) => {
  const pushRight = (str) =>
    [str[str.length - 1], ...str.slice(0, str.length - 1)].join("");

  for (let i = 0; i <= A.length; i++) {
    if (A === B) return i;
    A = pushRight(A);
  }

  console.log(A);
  return -1;
};

const solution2 = (A, B) => {
  /**
   * String.prototype.indexOf() : String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환
   * 
   * 일치하는 값이 없으면 -1 반환
   */
  const answer = (B + B).indexOf(A);
  console.log(answer);

  return answer;
};

solution("hello", "ohell");
solution("apple", "elppa");
solution("atat", "tata");
solution("abc", "abc");

solution2("hello", "ohell");
solution2("apple", "elppa");
solution2("atat", "tata");
solution2("abc", "abc");
