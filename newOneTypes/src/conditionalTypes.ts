export type StringOrNumber<T> = T extends string ? string : number;

function add2<T extends string | number>(value: T): StringOrNumber<T>;
function add2(value: string | number) {
  if (typeof value === "string") return value + "1";
  return value + 1;
}

const text = add2("string value"); //hover function add2 and display ---->
//function add<"string value" > (value:"string value"):string
console.log("conditinal type--->", text);
const num = add2(10);
console.log("conditinal type--->", num);

const text1 = add2<string>("be water");
console.log("conditinal type--->", text1);
