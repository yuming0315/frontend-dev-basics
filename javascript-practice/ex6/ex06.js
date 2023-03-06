/* 
    구조 분해 (Destrunting)
*/

// ex01
const user = {
  firstName: "둘",
  lastName: "리",
  email: "kickscar@gmail.com",
};

let firstName = user.firstName;
let lastName = user.lastName;
let email = user.email;

const { firstN = firstName, lastN = lastName, emaiL = email, num = 0 } = user;
console.log(firstN, lastN, emaiL, num);

// ex 4 - 내부 개체 (Nested Object)의 구조 분해
const student = {
  name: "둘리",
  age: 10,
  score: {
    math: 30,
    korean: 100,
    science: 90,
  },
};

const {
  name: studentName,
  score: { math = 0, korean = 0, science = 0, music = 0 },
} = student;

console.log(`${studentName}의 성적
국어: ${korean}
수학: ${math}
과학: ${science}
음악: ${music}
`);

// ex05 - 함수 파라미터
const averageScore = function ({
  //name은 studentName으로 받고, score은 math korean science로 :과 =의 차이
  name: studentName,
  score: { math = 0, korean = 0, science = 0, music = 0 },
}) {
  console.log(`${studentName}의 평균은 ${(math + korean + science) / 3}입니다`);
};
averageScore(student);

// ex06 배열의 구조분해: 기본
const color = [155, 200, 87];
let [red, green, blue] = color;
console.log(red, green, blue);

// ex07 - 배열의 구조분해 디폴트 값
[red = 0, green = 0, blue = 0, alpha = 0] = color;
console.log(red, green, blue, alpha);

// ex08 - 배열의 구조분해: skip value
const [, , colorOfBlue] = color;
console.log(colorOfBlue);

// ex09 - 배열의 구조분해: swap values
let x = 20;
let y = 10;
console.log(x, y);

//객체는 키 값 쌍인거 주의하기 단일 값만 교체는 배열[]로 감싸야함
[x, y] = [y, x];
console.log(x, y);

// ex10 - 배열의 구조분해: ... array spread operator
const rainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];
const [firstColor, secondColor, ...otherColors] = rainbow;
console.log(firstColor, secondColor, otherColors);

console.log("Colors of Rainbow", rainbow);
console.log("Colors of Rainbow", ...rainbow);

// ex10 - 배열의 구조분해: ... array spread operator 함수의 파라미터로 사용하기

// const f = function (...colors) {
//   return colors.join(" ");
// };
// const s = f("red", "orange", "yellow");

const s = ((...colors) => colors.join(" "))("red", "orange", "yellow");
console.log(s);
