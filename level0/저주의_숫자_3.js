const solution = (n) => {
  let num = 0;
  let count = 0;

  while (count < n) {
    num += 1;
    if (!("" + num).includes("3") && num % 3 !== 0) count += 1;
  }

  console.log(num);
  return num;
};

solution(15);
solution(40);
