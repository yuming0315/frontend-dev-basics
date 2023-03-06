/*
  
Named Export
destructing이 가능하다.

*/

const add = function (a, b) {
  return a + b;
};
const substract1 = function (a, b) {
  return a - b;
};

export { add, substract1 };
export default { add, substract1 };
