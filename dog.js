let dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
const checkDogs = function (dogsJulia, dogsKate) {
  dogsJulia = dogsJulia.slice(1).slice(0, 2);

  const allDogs = [...dogsJulia, ...dogsKate];

  allDogs.forEach(function (dogAge, index) {
    if (dogAge >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${dogAge} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    }
  });
};

// checkDogs(dogsJulia, dogsKate);

// console.log(retest);
const dogsJuliaAge = [5, 2, 4, 1, 15, 8, 3];
const calcAverageHumanAge = function (dogsAge) {
  const humanAge = dogsAge.map(function (age) {
    if (age < 2) {
      return 2 * age;
    } else {
      return 16 + age * 4;
    }
  });

  const adultDogs = humanAge.filter(function (age) {
    return age >= 18;
  });
  const averageAge = adultDogs.reduce(
    (acc, age) => acc + age,
    0 / adultDogs.length
  );

  console.log(averageAge);
};

// calcAverageHumanAge(dogsJuliaAge);
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.splice(5, 1);
// console.log(arr);

const transformArray = function (getStr) {
  const str = getStr.split(' ');

  const newStr = str.map(str => str.charAt(0).toUpperCase() + str.slice(1));

  const wholeArr = newStr.join(' ');
  return wholeArr;
};

// console.log(transformArray('hello sir, how are you?'));

// const arrSort = [4, 1, 7, 3, 5, 700, 20, 2];
// console.log(arrSort.sort((a, b) => b - a));
// const str = 'hello how are you'.split(' ');

// const newStr = str.map(str => str.charAt(0).toUpperCase() + str.slice(1));

// const wholeArr = newStr.toString().replaceAll(',', ' ');

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// console.log(Number.parseInt('23.88989px', 2));

// console.log(Math.trunc(Math.random() * 6) + 1);
// console.log(Math.trunc(Math.random() * 6) + 1);
// console.log(Math.trunc(Math.random() * 6) + 1);
// console.log(Math.trunc(Math.random() * 6) + 1);
// console.log(Math.trunc(Math.random() * 6) + 1);
// console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = function (min, max) {
  const num = Math.floor(Math.random() * (max - min) + 1) + min;
  return num;
};

console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

let array = [2, 40, 80, 1, 5];

const min = array.sort((a, b) => a - b);
console.log(min[min.length - 1]);

setTimeout(
  pizza_name => console.log('Here is Your Pizza  ' + `${pizza_name}`),
  3000,
  'Cheese Stuff'
);
console.log('Waiting.........');

const hh = 0;
const mm = 0;
const ss = 0;
