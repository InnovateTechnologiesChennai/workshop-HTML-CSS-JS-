// Date 

let mydate = new  Date()

// Today date is 14/6/2024

let todayDate = mydate.getDate() //14
let month = mydate.getMonth() + 1 // 6 -> index starts from 0 jan0 feb1 march2 apr3 may5 jun5
let year = mydate.getFullYear() // 2024 

console.log("Today Date is "+todayDate+"/0"+month+"/"+year);

console.log(`Today Date is ${todayDate}/0${month}/${year}`);

console.log(mydate.getDay()+1); //index starts from 0 // sun0 mon1 tue2 wed3 thu4 fri5 sat6

console.log(mydate.getTime());
console.log(mydate.toLocaleTimeString());
// let myname = "Dhoni"

let myname = new String("Dhoni")

console.log(myname);
console.log(myname[0]);
console.log(typeof(myname));  // obj

// math

let number = 25
console.log(Math.pow(2,9));
console.log(Math.sqrt(number));
console.log(Math.min(25,10,15,9,65,78,6));
console.log(Math.max(25,10,15,9,65,78,6));
console.log(Math.PI.toFixed(2)); // 3.14

// random Number:

// console.log( (Math.random() * 100) ); // 0.186545645 // 18.75

let random = 77.86567876567
console.log(Math.round(random));

// objects - non primitive :

// objects = { key:value , k:v , k:v , k:v }
// key - // value -> Str,Num,Boolean,Object,Array,Function

// 
let details = { 
  myName : "Dhoni" , //str
  myAge : 42,  // num
  isPlayer:false, //bool
  place : { // nested obj
    city : "CSK",
    address : {
      country : "india"
    }
  }
}

//  dot . notation
console.log(details.place.address.country);

// bracket [] notation
 console.log(details["myName"]);


 // task - use bracket notation and print india

 // for in , for of

 // for in : 

 for (let key in details){
  console.log(key + ":" + details[key]);
 }


