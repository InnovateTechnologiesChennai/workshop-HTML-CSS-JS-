// conditional statement 

// if else switch

// syntax

// if(condition){
//   // true - 
//   // code
// }else{
//   // false
//   // -code
// }

let number = 24
// odd or even - 

if(number % 2 == 0){
  console.log(number,"even number");
}else{
  console.log(number,"odd number");
}

// vote - 

let age = 11

// if(age>=18){
//   console.log(age,"u can vote");
// }
// else{
//   console.log(age,"u can't able to vote");
// }

// ternary operator

// (condition) ? " " : " "

console.log( (age>=18) ? "u can vote" : "u can't able to vote");

// switch 

let day = "TUESDAY"

switch(day){
  case "MONDAY" : console.log("OFFICE DAY");
  break;
  case "SUNDAY" : console.log("HOLIDAY");
  break;
  case "SATURDAY" : console.log("WEEKEND");
  break
  default : console.log("WORKING DAYS");
}

let mark = 49

switch(true){
  case(mark>100) : console.log("Invalid Mark");
  break
  case (mark >= 90) : console.log("S-Grade");
  break
  case (mark >= 80) : console.log("A-Grade");
  break
  case (mark >= 70) : console.log("B-Grade");
  break
  case (mark >= 60) : console.log("C-Grade");
  break
  case (mark>50) : console.log("D-Grade");
  break
  case (mark==50) : console.log("E-Grade");
  break
  case (mark<0) : console.log("marks can not be -ve");
  break
  case (mark<50) : console.log("fail");
  break
}

// looping : 5 loops - for while do-while , for in , for of

// 1
// console.log(1);
// console.log(2);
// console.log(3);

// for - 
// syntax
// for(initialise ; test-condition ; increment/decrement){
//   // code
// }
// initialise
// condition - T or F
// t - code
// increment/decrement

// for(let number = 1 ; number <= 5; number++){
//   console.log("for - loop iteration ",number);
// }

// while : 

// let num = 1
// while( num <= 5 ){
//   console.log("while - loop iteration ",num);
//   num++
// }

// do while 

let num = 1
do{
  console.log(num);
  num++
}while (num<=5)

// 5 - 1

for (let i = 5; i>=1 ; i-- ) {
  console.log(i);
}

for(let number = 1 ; number <= 100; number++){
  if(number%2 ==0){
    console.log("even-num",number);
  }
}

// Date , MATH

// const date = new Date
// console.log(date.getHours());

// string Methods

let fName = "MS"
let lName = "         DHONI             "
let names = "dhoni"
// (+)
console.log(fName.concat(lName));
console.log(fName.endsWith("S"));
console.log(fName.startsWith("M"));
console.log(lName.includes("z"));
console.log(lName.length);
console.log(lName);
console.log(lName.trim());
console.log(lName.trimStart());
console.log(lName.trimEnd());
console.log(names.toLowerCase());
console.log(names.toUpperCase());






















