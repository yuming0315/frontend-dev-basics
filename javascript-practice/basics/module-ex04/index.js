var mod01 = require("./error-module01");
var mod02 = require("./error-module02");
var mod03 = require("./error-module03");

// export로 해놓은건 import 못함 require 해야함

console.log(mod01);
// mod01() 시 오류

mod02();

console.log(mod02.function02);

console.log(mod03);
