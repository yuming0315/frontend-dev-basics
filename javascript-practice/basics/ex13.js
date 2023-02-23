/*
    string primitive type과 String 객체 함수(String.prototype.*)
*/

// 배열처럼 접근이 가능하다.
var str1 = "Hello World";
for (var i = 0; i < str1.length; i++) {
  console.log(str1[i]);
}
console.log(...str1);

// 문자열 합치기
var str2 = "hello";
var str3 = "world";
var str4 = str2 + " " + str3;
console.log(str4);

// casting
var str5 = "5" + 5;
console.log(str5);

var str6 = "boolean:" + true;
console.log(str6);

// 객체 함수
var str7 = "string1 string2 string3";

var index = str7.indexOf("string2");
console.log(index);
index = str7.indexOf("string22");
console.log(index);

console.log(str7.split(" "));

var str8 = str7.substring(10 /*first index*/, 13 /*lastindex -1*/);
console.log(str8);
