
// function : 

// function Declaration : 

funcName()

function funcName(){
    let a = 10
   console.log("hello JS");
}

funcName()


let a = 15
 a=20
console.log(a);

// function expression : 

const abc = function () {  
   console.log("hello func expression");
}
abc()

// func with argument & parameter passing : 

// My name is Sachin my age is 45

// function details(){
//     let myname1 = "MS DHONI"
//     let age1 = 42
//    console.log(`My name is ${myname1}, my age is ${age1}`);

//    let myname2 = "Sachin"
//     let age2 = 45
//    console.log(`My name is ${myname2}, my age is ${age2}`);
// }

// details()

function details (name,age) { // () - parameter
    let myname= name  // MS DHONI
    let myage = age  //42
   console.log(`My name is ${myname}, my age is ${myage}`);
}

details("MS DHONI",42)  // () - argument - 1st call

details("Sachin",45)

details("satz",10)

const abcd = function (message,pin) {  
    console.log(message+ " " + pin);
 }
 abcd ("hello func expression- arg & params",22222)

// arrow function

// fun exp -> 

const student =  (name) =>  {  
    console.log("hello arrow func expression",name);
 }
 student("MSD")


 const clickMe =  () =>{
    console.log("Button Clicked");
 }

 // call back function

function hello1(){
    console.log("Welcome-1");
 }
function hello2(){
    hello1()
 }
 function hello3(){
    hello2()
 }
 hello3()

 // 1 second = 1000 millisecond 

// setTimeout

setTimeout(()=>{
    console.log("Hello - TimeOut");
},10000)

// setInterval

// setInterval(()=>{
//     console.log("Hello - Intervel");
// },3000)

// task 2 -> how to stop setInterval .

// understanding return 

const student2 =  name =>  name

 console.log(student2("Hello MSD "));

// Call back chain : 

setTimeout( () => {
    console.log("Hello-1"); // 1 sec -after - hello-1
    setTimeout(() => {
        console.log("hello-2"); // hello 1 after 2 sec -> hello -2
        setTimeout(() => {
            console.log("hello-3"); // hello 2 after 3 sec -> hello -2
        }, 3000);
    }, 2000);
} , 1000);

// 

// const add = (x) => {
//     return add2(x+10)
// }
// const add2 = (x) =>{
//     return add3(x+15)
// }
// const add3 = (x) =>{
//     return x
// }
// console.log(add(25));


const add = x => add2(x+10)
const add2 = x =>add3(x+15)
const add3 = x => x
console.log(add(25));


// datatypes - primitive - Str,num, boole,undef,null
// non - primi => obj , fun ,(arr)
// variables - let var const 
// conditional - if else , switch
// operators - arithmetic , assign , comp , logi , ternaryOperator
// increment -(pre,post) , decrement - (pre,post)
// looping- for while doWhile for in (for of)
// date 
//Math
// ob maj = {K:v,K:v} // .dot notation []bracket notation
// day-13 functions - 