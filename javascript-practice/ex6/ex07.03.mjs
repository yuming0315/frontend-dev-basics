/*
  
Named Export
exports(require.js)와 유사하다.

*/

export const add = function (a, b) {
  return a + b;
};
export const substract = function (a, b) {
  return a - b;
};

//앞의 export를 모두 제거하고
//export{add, substract};
