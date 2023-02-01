type TypeA = {
  name: string;
  age: number;
};

interface InterfaceA {
  country: string;
}

type TypeB = TypeA & InterfaceA;

const employee: TypeB = {
  name: "Bobby Hadz",
  age: 30,
  country: "Chile",
};
console.log(employee);
