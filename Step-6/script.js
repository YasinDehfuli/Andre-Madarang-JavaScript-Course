// Function expression (Still works without SayHello name 🚀)
// const hello = function sayHello(firstName) {
//   console.log(`Hello ${firstName}!`);
// }
//
// hello('Yasin');

// IIFE = immediately invoked function expression
// (const hello = function sayHello(firstName) {
//   console.log(`Hello ${firstName}!`);
// })();

// With return
const hello = function sayHello(firstName) {
  return `Hello Dear ${firstName}!`
}

console.log(hello('Yasin'));

// Arrow functions =>
const Arrow = firstName => `Hello Dear ${firstName}!`


console.log(Arrow('President Raiesi'));


// Clean Step-4 codes

const person = {
  name: "John",
  family: "Josefin Sans",
  email: "john@example.com",
  password: "password@example.com",
  "age": "20",
  isCool: false,
  hobbies: ['Video Games', 'Basketball', 'Chat', 'Volleyball'],
  address: {
    street: "Street",
    city: "City",
    state: "State",
    zip: "Zip",
  },
  // Code cleaner From: 🔄 howOldAmI: function () To: howOldAmI() - (this.age should change to person,age)
  howOldAmI() {
    console.log(`I am ${person.age} years old `);
  }
}

person.howOldAmI();

// Add Event listener ⬇️

let button = document.querySelector('button');

const Greeting = () => {
  console.log(`Greeting This Button Click Works!!!!`);
}

button.addEventListener('click', Greeting);