const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:

function slice(start, finish) {
  let modifiedFood = [];
  for (let fItem = start; fItem < finish - 1; fItem++) {
    modifiedFood.push(foods[fItem]);
  }
  return modifiedFood;
}

// Progression 2:

function spliced() {
  foods.splice(2, 0, 'noodles', 'icecream');
  return foods;
}

// Progression 3:

function isEven(number) {
  return number % 2 == 0 ? true : false;
}

function isPrime(number) {
  if (number === 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else {
    for (let x = 2; x < number; x++) {
      if (number % x === 0) {
        return false;
      }
    }
    return true;
  }
}

function checkNumber(numberArray, operation) {
  modifiedNumberArray = numberArray.filter(operation);
  return modifiedNumberArray;
}

// Progression 4:

function reject(numberArray) {
  let nonPrimeNumberArray = [];
  numberArray.forEach((number) => {
    isPrime(number) ? null : nonPrimeNumberArray.push(number);
  });

  return nonPrimeNumberArray;
}

function nonPrime(numberArray) {
  ans = reject(numberArray);
  return ans;
}

// Progression 5:

const isEvenUsingLambda = (number) => number % 2 == 0;

// Progression 6:

function square(number) {
  return number * number;
}

function findSquareOfNumbers(myArray) {
  let squaredArray = myArray.map(square);
  return squaredArray;
}

// Progression 7:

function multiply(myArray) {
  return myArray.reduce((mul, number) => {
    return mul * number;
  }, 1);
}

function sumOfSquares(myArray) {
  return myArray.map(square).reduce((sum, number) => {
    return sum + number;
  }, 0);
}
