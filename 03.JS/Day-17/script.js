// oops

import Transport, { airTransport, electronicVehicle } from "./script2.js";

// let student= {
//   myname : "MSD",
//   myage: 22,
  
//   welcome : function (){
//     let studentDetails = `My name is ${this.myname}, my age is ${this.myage}`
//     console.log(studentDetails);
//   }
// }

// student.welcome()

// factory function :

function createEmp (name,age) {
  return{
    myname: name,
    myage : age,
    welcome : function(){
      let studentDetails = `My name is ${this.myname}, my age is ${this.myage}`
      console.log(studentDetails);
    }
  }
}
let emp1 = createEmp("MSD",22)
emp1.welcome()

let emp2 = createEmp("SACHIN",32)
emp2.welcome()

// let x = new Date()


// constructor func :

function CreateStudent(name){
    this.studentName = name
    this.welcomeMesg = function(){
      console.log(`Hello , This is ${this.studentName}`);
    }
}

const stu1 = new CreateStudent("MSD")
stu1.welcomeMesg()

const stu2 = new CreateStudent("SACHIN")
stu2.welcomeMesg()


// class : 

// amzn -
class Player{
  constructor(name){
    this.playerName = name
  }
  play(){
    console.log("hello user",this.playerName);
    console.log("u can play only IPL");
  }
}

class PremiumPlayer extends Player {
    constructor(name){
      super(name)
      this.playerName = name
    }
    play(){
      console.log("hello",this.playerName);
      console.log("You are Premium Player u can all in all format ");
    }
}

// playerOne = new Player("MSD")


let premium1 = new PremiumPlayer("MSD")
premium1.play()

// player1 = new Player("Sachin")
// player1.play()


const type = new Transport()
type.car()

electronicVehicle()
airTransport()

// js DOM (2)
// react -> component based -> class , function




