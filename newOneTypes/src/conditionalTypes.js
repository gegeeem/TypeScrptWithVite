"use strict";
exports.__esModule = true;
function add2(value) {
    if (typeof value === "string")
        return value + "1";
    return value + 1;
}
var text = add2("string value");
console.log("conditinal type--->", text);
var num = add2(10);
console.log("conditinal type--->", num);
