const solution = (bin1, bin2) => {
  const answer = (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
  console.log(answer);

  return answer;
};

const solution2 = (bin1, bin2) => {
  let temp = Number(bin1) + Number(bin2);
  temp = [...temp.toString()].reverse().map((v) => +v);

  for (let i = temp.length; i < 11; i++) {
    temp.push(0);
  }

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 2) {
      temp[i] = 0;
      temp[i + 1]++;
    } else if (temp[i] === 3) {
      temp[i] = 1;
      temp[i + 1]++;
    }
  }
  console.log(temp);

  const answer = Number(temp.reverse().join("")).toString();
  console.log(answer);

  return answer;
};

solution("10", "11");
solution("1001", "1111");

solution2("10", "11");
solution2("1001", "1111");
