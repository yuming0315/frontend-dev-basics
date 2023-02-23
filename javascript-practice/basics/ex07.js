/*
자바스크립트 객체 2 - function 타입
*/

// 일반함수(실행코드 블록이 있는 함수, 관례대로 소문자로 시작한다.)
var myFucntion = function () {
  console.log("일반함수");
};

// 생성자 함수(관례대로 대문자로 시작한다.)
var MyObj = function (name, age) {
  this.name = name;
  this.age = age;
};

var MyObject = (name, age) => {
  this.name = name;
  this.age = age;
};

var o = new MyObject("둘리", 10);
console.log((a = MyObject("둘리", 10)));
console.log(typeof (a = MyObject("둘리", 10)));
console.log(o);
console.log(typeof o);
