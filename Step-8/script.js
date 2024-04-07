// With If & ElseIF
const trafficLight = 'red';

if (trafficLight === 'red') {
  console.log('STOP');
} else if (trafficLight === 'green') {
  console.log('GO');
} else if (trafficLight === 'yellow') {
  console.log('WAIT');
}

// With Better way: Switch Case
switch (trafficLight) {
  case 'red':
    console.log('STOP');
    break;
  case 'green':
    console.log('GO');
    break;
  case 'yellow':
    console.log('WAIT');
    break;
}

// Switch case for grade A-B-C-D Numbers
let grade = '99';

switch (true) {
  case grade >= 80:
    console.log('A');
    break;
  case grade >= 70:
    console.log('B');
    break
  case grade >= 60:
    console.log('C');
    break;
  case grade >= 50:
    console.log('D');
    break;
  default:
    console.log('Your Grade isnt supported');
}

// Animal Exercise: For better understanding of break use.
let animal = 'donkey';

switch (animal) {
  case 'pig':
    console.log('Pig');
  case 'wolf':
    console.log('Wolf');
  case 'dog':
    console.log('DOG');
    break
  case 'hipapaptomos':
  case 'donkey':
  case 'chicken':
    console.log('Chicken');
    break;
  default:
    console.log('We havent this animal');
}