// promise : 

// promise -> pending , success , failure

// success / error => handle -> .then() -> resolve , .catch() ->reject


// const p1 = new Promise((res,rej)=>{
//     rej("failure")
//     res("successfully completed")
// })
// p1.then(console.log).catch(console.log)

// // func declaration

// function p2(){
//   return new Promise((resolve,reject)=>{
//     resolve("function promise success")
//     reject("function promise failure")
//   })
// }

// p2().then(console.log).catch(console.log)


const p3 =  () =>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("success-1")
      reject("failure-1")
    },1000)
  })
}

// p3().then(console.log).catch(console.log)

const p4 =  () =>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      reject("failure-2")
      resolve("success-2")
    },2000)
  })
}

// p4().then(console.log).catch(console.log)

// methods - all allSettled race

// Promise.all([p3(),p4()]).then(console.log).catch(console.log)

// Promise.allSettled([p3(),p4()]).then(console.log).catch(console.log)

// Promise.race([p3(),p4()]).then(console.log).catch(console.log)

const add = (x) => {
    return add2(x+10)
}
const add2 = (x) =>{
    return add3(x+15)
}
const add3 = (x) =>{
    return x
}
console.log(add(25));

const addition = (x) => new Promise((res,rej)=> res(x))  // res(20)

addition(20)
.then(z => z+10) // 1st then - 20 z-20 => 30
.then(s => s+10) // 40
.then(m => m+50) // 90
.then(console.log)

// async function / await : 

// async function afName(){
    // promise -> updated version of promise
// }
// afName()

async function hello(){
  return "hello"
}
console.log(hello());

// func (vs) async func
//func - bank 
// 1st per - t1 , 2nd pers - t2......

// aync func - hotel 
// 1st per - f rice , 2nd briyani -

// try{ ............ } catch(err){ }



async function example(mesg){
    try {
      return await mesg
    } catch (error) {
      console.log(error);
    }
}

async function getMesg(){
  try {
    const mymesg = await example("hello js")
    console.log(mymesg);
  } catch (error) {
    console.log(error);
  }
}
getMesg()

// const example = async  () => {

// }
// example()

// fetch - CRUD  - post(create) , read(get) , update/edit(u)- put , delete(d) -delete

// fetch('https://fakestoreapi.com/products/1')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))


function getData(){
  return new Promise((res,rej)=>{
    fetch('https://fakestoreapi.com/products/1')
  .then(response => response.json())
  .then(data => res(data))
  .catch(err => rej(err))
  })
}
getData().then(data => console.log(data)).catch(err => console.log(err))

async function getResponse(){
  try {
    const response = await  fetch('https://fakestoreapi.com/products/1')
    const jsonResp = response.json()
    return jsonResp
  } catch (error) {
    console.log(error);
  }
}

async function getProducts(){
  try {
    const data = await getResponse()
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getProducts()






