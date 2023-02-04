const solution = (num, total) => {
  const numArray = Array.from({ length: num }, (_, i) => i);
  const sum = numArray.reduce((x, y) => x + y);

  const answer = numArray.map((v) => v - (sum - total) / num);
  console.log(answer);

  return answer;
};

const solution2 = (num, total) => {
  let answer = [];
  let ceilNum = Math.ceil(total / num - Math.floor(num / 2));
  console.log(ceilNum);

  answer = Array.from({ length: num }, (_, i) => i + ceilNum);
  console.log(answer);

  return answer;
};

const solution3 = (num, total) => {
  /**
   * Math.ceil() : 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer로 반환
   *
   * Math.floor() : 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
   *
   * Array.prototype.fill() : 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채움
   */
  const min = Math.ceil(total / num - Math.floor(num / 2));
  console.log(min);
  const max = Math.floor(total / num + Math.floor(num / 2));
  console.log(max);

  const answer = new Array(max - min + 1).fill(0).map((v, i) => {
    return i + min;
  });
  console.log(answer);

  return answer;
};

solution(3, 12);
solution(5, 15);
solution(4, 14);
solution(5, 5);

solution2(3, 12);
solution2(5, 15);
solution2(4, 14);
solution2(5, 5);

solution3(3, 12);
solution3(5, 15);
solution3(4, 14);
solution3(5, 5);
