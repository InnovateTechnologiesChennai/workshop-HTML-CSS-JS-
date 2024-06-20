// array - sort :

// array of objects : [ {K:V, K:v} , {}  ,{}]

const players = [
  { studName: "msd", stuMark: 150, class: "6A" },
  { studName: "sachin", stuMark: 258, class: "7A" },
  { studName: "virat", stuMark: 450, class: "8A" },
  { studName: "rohit", stuMark: 369, class: "8A" },
  { studName: "rahul", stuMark: 541, class: "6A" },
  { studName: "ashwin", stuMark: 480, class: "7A" },
  { studName: "vijay", stuMark: 430, class: "7A" },
  { studName: "msd", stuMark: 200, class: "8A" },
];

console.log(players);

// map :

const nameOnly = players.map((x) => {
  return x.studName;
});
console.log(nameOnly);

players.forEach((x) => {
  const nameOnly = x.studName;
  console.log(nameOnly);
});

// filter :

const above300 = players.filter((student) => {
  return student.stuMark > 300;
});
console.log(above300);

const class8A = players.filter((student) => {
  return student.class == "8A";
});
console.log(class8A);

// find

const class6A = players.find((student) => {
  return student.class == "6A";
});
console.log(class6A);

// filter student name only who got above 400 ?

// const above400 = players.filter((student)=>{
//     return student.stuMark > 400
// })
// console.log(above400);

// const above400Name = above400.map((x)=>{
//     return x.studName
// })
// console.log(above400Name);

// const above400 = players.filter(student=>student.stuMark > 400)
// console.log(above400);

// const above400Name = above400.map(x=>x.studName)
// console.log(above400Name);

const above400Name = players
  .filter((student) => student.stuMark > 400)
  .map((e) => e.studName)
//   .sort((a, b) => a.localeCompare(b));



console.log(above400Name);
console.log(above400Name.sort((a, b) => a.localeCompare(b)));

// reduce:

const totalMark = players.reduce((a, b) => {
  return a + b.stuMark;
}, 0);
console.log(totalMark);

//

const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    category: "men's clothing",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    category: "men's clothing",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    category: "men's clothing",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    category: "men's clothing",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    category: "jewelery",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
];

// map :

const proName = products.map((item)=>{
    return item.title
})
console.log(proName);

const proCount = products.map((item)=>{
    return item.rating.rate
})
console.log(proCount);

//

const numbers = [5,3,8,1,2,7,4,6,6]

const numSort = numbers.sort( (a,b) => a-b)
console.log(numSort);

const num = [1, 2, 3, 4, 5, 6, 7, 8,9]
// num.splice(3,4,10,11,"msd" ,true)
// console.log(num);

// slice 
console.log(num);
console.log(num.slice(3,-2));



// a-b = -ve  => a shoule come before b
//, +ve , => a shoule come before b
// 0 => order no change 

//a-5 b-3 => 2 // [5,3,8,1,2,7,4,6] = [3,5,1,2,4,6,8]

// splice slice

