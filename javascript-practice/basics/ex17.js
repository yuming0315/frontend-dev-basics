/*
    function.prototype.call
    function.prototype.apply
    function.prototype.bind
*/

var myObject = {
  v: "yum",
  f1: function () {
    console.log(this.v);
  },
  f2: function (param1, param2) {
    console.log(param1 + " " + this.v + " " + (param2 ? param2 : ""));
  },
};

var yourObject = {
  v: "you",
};

// 일반적인 객체의 함수호출
myObject.f1();

// apply: 호출되는 함수의 this 파라미터로 전달된 객체로 바꾼다. 1회용
myObject.f1.apply(yourObject); // f가 실행될때 this는 yourObject
myObject.f1();

myObject.f2.apply(yourObject); //오류 파라미터에 값이 안들어감

myObject.f2.call(yourObject, "hello");

myObject.f2.call(yourObject, "hello", "again");

// bind: 호출되기 전에 함수의 this
