/*
    배열(Array)
*/

console.log("=== 배열 생성1: 내장객체(생성자 함수) 사용하는 방법 ===");

var a1 = new Array();
console.log(typeof a1, a1 instanceof Array, a1.length);

var test1 = [];
console.log(typeof test1, test1 instanceof Array, test1.length);

// 생성자 함수의 파라미터가 하나인 경우: 배열의 크기
var a2 = new Array(10);
console.log(typeof a2, a2 instanceof Array, a2.length);

// 배열의 크기 지정하는 것은 별의미가 없다: 동적으로 배열은 늘어 난다.
a2[0] = 0;
a2[5] = 5;
a2[10] = 10;
console.log(a2, a2.length);

// 생성자 함수의 파라미터가 두 개이상인 경우: 초기값 설정
var a3 = new Array(0, 2, 4, 6, 8);
console.log(a3, a3.length);

// 배열 요소의 타입은 통일하지 않아도 된다.
var a5 = [
  10,
  "JavaScript",
  true,
  undefined,
  { name: "둘리", age: 10 },
  function () {
    console.log("Hello World");
  },
];

console.log("=== 배열의 순회 ===");
for (var i = 0; i < a5.length; i++) {
  console.log(a5[i]);
}

a5[5]();

console.log("=== Array vs Object ===");
a6 = [];
a6[0] = 0;
a6["1"] = 1;
a6.name = "둘리";
a6.age = 10;

console.log(a6);
console.log(a6["0"], a6["name"], a6.age, "length:" + a6.length);

var o6 = {};
o6[0] = 0;
o6["1"] = 1;
o6.name = "둘리";
o6.age = 10;

console.log(o6);
console.log(o6["0"], o6["name"], o6.age, "length:" + o6.length);

console.log(a6["name"]); // a6[2] 는 undefined
console.log(o6[0]); // 저장할 때 문자열 키값으로 바꿈 조회할때도 비슷한 것 같다

// for ~ in
console.log("=== for ~ in : 객체 ===");
for (prop in o6) {
  console.log(prop, o6[prop]);
}
console.log("=== for ~ in : 배열 ===");
for (prop in a6) {
  console.log(prop, a6[prop]);
}
