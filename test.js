//first

let array = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
positive = [];
let result = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    result += array[i];
    positive.push(array[i]);
  }
}
console.log("sum = " + result);
console.log("positive elements = " + positive.length);

//second

let minimum = Math.min(...array);
console.log("minimum = " + minimum);
console.log("index of minimum = " + array.indexOf(minimum));

//third

let maximum = Math.max(...array);
console.log("maximum = " + maximum);
console.log("index of maximum = " + array.indexOf(maximum));

//fourth
negative = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    negative.push(array[i]);
  }
}

console.log("negative elements = " + negative.length);

//fifth

positiveN = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    if (array[i] % 2 !== 0) positiveN.push(array[i]);
  }
}
console.log("neparn positive = " + positiveN.length);

//sixth

positiveP = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    if (array[i] % 2 === 0) positiveP.push(array[i]);
  }
}
console.log("parn positive = " + positiveP.length);

//seventh

let sumOFpositiveP = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    if (array[i] % 2 === 0) sumOFpositiveP += array[i];
  }
}

console.log("suma of positive parn elements = " + sumOFpositiveP);

//eighth

let sumOFpositiveN = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    if (array[i] % 2 !== 0) sumOFpositiveN += array[i];
  }
}

console.log("suma of positive neparn elements = " + sumOFpositiveN);

//nineth

let proizvedenie = 1;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    proizvedenie *= array[i];
  }
}

console.log("proizvedenie = " + proizvedenie);

//tenth

let max = array[0];
let maxi = 0;
for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
    array[maxi] = 0;
    maxi = i;
  } else {
    array[i] = 0;
  }
  continue;
}

console.log("new array = [" + array + "]");
