// function declaration / function definition
function Name(Fname = 'Fname not intered' , Lname = 'Lname not intered') {
  // function body
  console.log('Hello');
  console.log(Fname);
  console.log(Lname)
}

// function call / invoke / executing / run
Name('Yasin' , 'Dehfuli');
Name('Johan');


// With Return ⬇️
function NameAgain(Fname = 'Fname not intered' , Lname = 'Lname not intered') {
  
  return `Hello, ${Fname} ${Lname}!`;
}

// Return Name Again With console.log(); And Say name & family
console.log(NameAgain('John', 'F Cenedy'));


function add(num1,num2) {
  return num1 + num2;
}

// For Better and Clean Code ⬇️
const result = add(2, 4);
console.log(result);

// Just For Result ⬇️
console.log(add(5,3));

