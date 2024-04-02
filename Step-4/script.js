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
  howOldAmI: function () {
    console.log(`I am ${this.age} years old `);
  }
}

const groupOfPeople = [
  {
    name: "jason",
    age: "22"
  },
  {
    name: "jack",
    age: "29"
  },
  {
    name: "james",
    age: "32"
  },
];

// Add Another Slot To Person
person.gender = ["male", "female"];

// Delete Slot Of Person
delete person.isCool;

// Log All Objects ⬇️
console.log('Person', person);

// Log Special Objects ⬇️
console.log('Name:', person.name);
console.log('Family:', person.family);

console.log('Hobbies:', person.hobbies);
console.log('Is He Cool?', person.isCool);
console.log('Address:', person.address);

// For Log string ⬇️
console.log(person['Age:', "age"]);

// Show How Old Are You Function
person.howOldAmI();