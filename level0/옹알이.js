const convertPWordsToNum = (word) => {
  const pWords = ["aya", "ye", "woo", "ma"];
  return pWords.reduce((result, pWord, i) => result.replaceAll(pWord, i), word);
};

const canPronounce = (word) => {
  const result = convertPWordsToNum(word);
  return (
    !/[^\d]/.test(result) &&
    [...result].every(
      (num, i) => i + 1 > result.length || num !== result[i + 1]
    )
  );
};

function solution(babbling) {
  console.log(babbling.filter((b) => canPronounce(b)).length);
  return babbling.filter((b) => canPronounce(b)).length;
}

const solution2 = (babbling) => {
  const can = ["aya", "ye", "woo", "ma"];

  let count = 0;
  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];

    for (let j = 0; j < can.length; j++) {
      if (babble.includes(can[j].repeat(2))) {
        break;
      }

      babble = babble.split(can[j]).join(" ");
    }

    if (babble.split(" ").join("").length === 0) {
      count += 1;
    }
  }

  console.log(count);
  return count;
};

const solution3 = (babbling) => {
  let answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/; // 정규식

  babbling.forEach((word) => {
    if (regex.test(word)) {
      answer++;
    }
  });

  console.log(answer);
  return answer;
};

solution(["aya", "yee", "u", "maa", "wyeoo"]);
solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]);

solution2(["aya", "yee", "u", "maa", "wyeoo"]);
solution2(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]);

solution3(["aya", "yee", "u", "maa", "wyeoo"]);
solution3(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]);
