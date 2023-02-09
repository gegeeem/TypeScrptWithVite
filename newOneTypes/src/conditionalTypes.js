"use strict";
exports.__esModule = true;
function add2(value) {
    if (typeof value === "string")
        return value + "1";
    return value + 1;
}
var text = add2("string value"); //hover function add2 and display ---->
//function add<"string value" > (value:"string value"):string
console.log("conditinal type--->", text);
var num = add2(10);
console.log("conditinal type--->", num);
var text1 = add2("be water");
console.log("conditinal type--->", text1);
