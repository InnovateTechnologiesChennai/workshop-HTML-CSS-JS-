console.log("Day-14- Good Evening All");


// Array - []

//
// const myArr =  Array(10,25,"MSD",true)

const myArr = [25,10,"MSD",false,,null,{myname:"Sachin",age:53}] // index - starts from 0
console.log(myArr[6].age);

console.log(myArr.length);

// methods : 

const colours = ["red","blue","Orange","White","green"]
console.log("original Arraay",colours);

// push : 

// Appends new elements to the end of an array, and returns the new length of the array.
colours.push("pink","purple")

console.log("push",colours);

//pop

// Removes the last element from an array and returns it.
//  If the array is empty, undefined is returned and the array is not modified.
colours.pop()
colours.pop()
colours.pop()
console.log("pop",colours);

// unshift :

colours.unshift("magenta","black")
console.log("unshift",colours);

// shift :
colours.shift()
console.log("shift",colours);

// concat

let colours2 = ["gold","silver"]
console.log(colours2.concat(colours));

// spread / rest operator 
console.log([...colours2,...colours]);

// tostring

console.log("tostring : ",colours.toString());

// join

console.log("join : ",colours.join("--"));

// delete - 

delete colours[2]
console.log("after delete : ", colours);

// fill 

colours.fill("green",2,3)
console.log("after fill : ", colours);

// task : colours.splice() ,  colours.slice()

//  includes :

console.log(colours.includes("White"));

// split

let myname = "DHONI Sachin"
console.log(myname);
console.log(myname.split(" ")[1]);

// reverse : 

console.log("reverse",colours.reverse());

// sort 

// colours.push(2,100,11,33,430,44,767) 
console.log("original Arraay",colours); //a -z // num uc  lc

// console.log("sort", colours.sort());

// map (foreach) filter find reduce sort findIndex

let numbers = [10,25,15,96,20]

// map : 

console.log(numbers);

const mapMethod = numbers.map( (val) =>{
    return val * 2
})
console.log(mapMethod);

// filter 

console.log("og Array",numbers);


const filterMethod = numbers.filter( (val) =>{
    return val % 2 !== 0
})
console.log(filterMethod);


// find
console.log("og Array",numbers);


const findMethod = numbers.find( (val) =>{
    return val % 2 == 0
})
console.log("find",findMethod);

// reduce : 

let num = [1,2,3,4,5] //15

const reduceMethod = num.reduce( (a,b) =>{
    return a+b 
} , 0 )
console.log("reduce : ",reduceMethod);

// a = 0 b=1 a+b = 1
// a=1 b=2 => 3

// forEach 

 numbers.forEach( (x) =>{
    const forEachMethod = x + 20
    console.log(forEachMethod);
})

// sort : 

let stuName =  ["sathya","msd",'admin',"subi","kawin"]
console.log(stuName);
console.log(stuName.sort().reverse());

const sortAlphabets = stuName.sort( (a,b) =>{
    return b.localeCompare(a)
})
console.log("sort : ",sortAlphabets);


// num sort
let stuMark = [30,96,15,86,10,155,425,44,25,77,88]
// console.log(stuMark.sort());

const sortNumbers = stuMark.sort( (a,b) =>{
    return b-a
})
console.log("sort : ",sortNumbers);





















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