// Drink age
const age = 23;
const drinkAge = 19;

if (age >= drinkAge) {
  console.log(`You can drink !!`);
} else {
  console.log(`You can't drink !!`);
}

// Password Check
const password = 'Password';
const checkPassword = 'Anyyyyyyyy';

if (password === checkPassword) {
  console.log(`You Log In!`);
} else {
  console.log(`Password did not match, Please try Another Password!`);
}

// Drink Age ShortHand
const canDrink = age >= drinkAge
  ? console.log(`You can drink !!`)
  : console.log('You cant drink shorthand !!');

// password check shorthand
const checkPass = password === checkPassword
  ? console.log('true password!!!')
  : console.log('please try again !!');