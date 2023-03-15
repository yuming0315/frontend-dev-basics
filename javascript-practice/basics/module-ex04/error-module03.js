module.exports = {
  n: 10,
  s: "Javascript Module",
  o: {},
};
// 위의 문장을 쓰면 아래의 문장은 쓰면 안 됨
exports.b = false;
exports.f = function () {};
