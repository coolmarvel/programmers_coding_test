const num = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const solution = (numbers) => {
  for (let i = 0; i < num.length; i++) {
    numbers = numbers.split(num[i]).join(i);
  }
  const answer = Number(numbers);
  console.log(answer);

  return answer;
};

solution("onetwothreefourfivesixseveneightnine");
solution("onefourzerosixseven");
