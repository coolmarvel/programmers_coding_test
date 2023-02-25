const order = (coupons) => {
  if (coupons < 10) return 0;
  const service = Math.floor(coupons / 10);
  return service + order(service + (coupons % 10));
};

const solution = (chicken) => {
  const answer = order(chicken);
  console.log(answer);

  return answer;
};

const solution2 = (chicken) => {
  let answer = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    answer = answer + parseInt(coupon / 10);
    coupon = parseInt(coupon / 10) + (coupon % 10);
  }
  console.log(answer);

  return answer;
};

const solution3 = (chicken) => {
  const answer = ~~(chicken * 0.111111);
  console.log(answer);

  return answer;
};

solution(100);
solution(1081);

solution2(100);
solution2(1081);

solution3(100);
solution3(1081);
