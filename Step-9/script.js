//  For
// for (i = 0 ; i <= 6; i++) {
//   console.log(`i is ${i}`);
// }

// For - Show index of arrays by for loop
// const nums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
//
// for (i = 0 ; i <= nums.length; i++) {
//   console.log(nums[i]);
// }

// Break & Continue
for (i = 0; i <= 6; i++) {
  if (i === 4) {
    // It Breaks numbers of array (Shows 0-1-2-3)
    // break;
    
    // it Doesn't show number for - continue is used to skip a index
    continue;
  }
  
  console.log(`i is ${i}`);
}

// While loops
let j = 0;
while (j <= 6) {
  console.log(`j is ${j}`);
  j++;
}

// Do While loops
let k = 0;
do {
  console.log(`k is ${k}`);
  k++;
} while (k < 6)

// For In loops

const who = {
  firstName : "John",
  lastName : "Doe",
  email : "john@doe.com",
}

for (const x in who) {
  console.log(who[x]);
}

// For Of loops
const people = ['John', 'Jack', 'joseph'];

// for (const z of people) {
//   console.log(z);
// }


// ForEach parameter
people.forEach((person,index) => {
  console.log(`index is ${index} person is ${person}`);
});

// Map log will be arrayed
const peopleMap = people.map((person,index) =>{
  return `${index}:${person}`
});
console.log(peopleMap);
