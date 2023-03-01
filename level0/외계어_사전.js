const solution = (spell, dic) => {
  const sort = (str) =>
    [...str].sort((a, b) => (a < b ? -1 : a !== b ? 1 : 0)).join("");
  const answer = dic.find((dic) => sort(dic) === sort(spell.join(""))) ? 1 : 2;
  console.log(answer);

  return answer;
};

solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]);
solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]);
solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"]);
