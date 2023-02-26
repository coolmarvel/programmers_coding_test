const solution = (a, b) => {
  const getGCD = (a, b) => {
    let gcd = 1;
    for (let i = 1; i <= Math.min(a, b); i++) {
      if (a % i === 0 && b % i === 0) gcd = i;
    }
    return gcd;
  };

  const getPrimeFactors = (num) => {
    let pFactors = [];
    for (let i = 2; i <= Math.sqrt(num); i++) {
      while (num % i === 0) {
        pFactors = [...pFactors, i];
        num /= i;
      }
    }
    if (num > 2) pFactors = [...pFactors, num];
    return pFactors;
  };

  const answer = getPrimeFactors(b / getGCD(a, b)).find(
    (n) => n !== 2 && n !== 5
  )
    ? 2
    : 1;
  console.log(answer);

  return answer;
};

solution(7, 20);
solution(11, 22);
solution(12, 21);
