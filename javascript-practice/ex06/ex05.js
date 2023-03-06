/*
    Arrow Function
*/

const power = function (x) {
  return x * x;
};

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (n) {
  process.stdout.write(`${n}: ${power(n)}\t`);
});

// ex01
console.log("\n------\n");
numbers.forEach(function (n) {
  //   let result = (function (x) {
  //     return x * x;
  //   })(n);

  let result = ((x) => x * x)(n);
  process.stdout.write(`${n}: ${result}\t`);
});

// ex02
console.log("\n------\n");
numbers.forEach((n) => {
  process.stdout.write(`${n}: ${((x) => x * x)(n)}\t`);
});

// ex03
console.log("\n------\n");
[5, 3, 15, 1045, 43, 92].forEach((n) => {
  if (n % 5) {
    process.stdout.write(`${n}: ${((x) => x * x)(n)}\t`);
  }
});

// ex04 - this를 어휘적으로 바인딩(Lexical Bind)
console.log("\n------\n");
const dooly = {
  name: "둘리",
  friends: ["또치", "마이콜", "도우너", "길동"],
  printFriends: function () {
    //this 출력 시 이 객체 모두가 나옴
    this.friends.forEach((f) => console.log(`${this.name}의 친구 ${f}`));
    //참조하는 함수를 화살표로 바꾸면 밖의범위
    this.friends.forEach(function (f) {
      console.log(`${this.name}의 친구 ${f}`);
    });
  },
};

dooly.printFriends();
