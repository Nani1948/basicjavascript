let a=10;
let b=30.14;
var c="Rahul Shetty";
console.log("The sum of two variable is "+(a+b));
var c=a+b;
console.log(`The sum of two variable is ${c}`);
//we cant redeclare a variable with let keyword but we can reassign the value and but not possible with var and const
//let a=20; //redeclare error
a=20;   //reassign
console.log(a);
const d=100;    
//d=200; //reassign error
//const d=300; //redeclare error
console.log(d);
let e=true;
console.log(e);
console.log(typeof(e));
console.log(typeof(a+b));
console.log(!e);
