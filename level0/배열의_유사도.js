const solution = (s1, s2) => {
  const answer = s1.filter((v) => s2.includes(v)).length;
  console.log(answer);

  return answer;
};

function solution2(s1, s2) {
  let answer = 0;
  for (var i = 0; i < s1.length; i++) {
    for (var j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) answer++;
    }
  }
  console.log(answer);

  return answer;
}

solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]);
solution(["n", "omg"], ["m", "dot"]);

solution2(["a", "b", "c"], ["com", "b", "d", "p", "c"]);
solution2(["n", "omg"], ["m", "dot"]);
