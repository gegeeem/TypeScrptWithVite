var employee = {
    name: "Bobby Hadz",
    age: 30,
    country: "Chile"
};
console.log(employee);
function moja(a) {
    console.log("typeof inputted value", typeof a);
    return a;
}
moja(54);
moja(employee.name);
