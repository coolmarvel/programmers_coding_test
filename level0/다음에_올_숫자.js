const solution = (common) => {
  const isTrue = (arr) => arr[2] - arr[1] === arr[1] - arr[0]; // 배열의 2번째 1번째 뺀 값이 1번째 0번째 뺀 값이랑 같니
  console.log(isTrue(common)); // true, false

  const answer = isTrue(common)
    ? common[common.length - 1] + common[1] - common[0] // true면 등차수열
    : common[common.length - 1] * (common[1] / common[0]); // false면 등비수열
  console.log(answer);

  return answer;
};

solution([1, 2, 3, 4]);
solution([2, 4, 8]);
