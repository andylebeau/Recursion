function fibs(num) {
  let fibArray = [0, 1];
  let index = 0;

  // edge cases
  if (num < 3)
    return `By definition, the Fibonacci Sequence begins with [0, 1]`;

  while (fibArray.length < num) {
    let next = fibArray[index] + fibArray[index + 1];
    fibArray.push(next);
    index++;
  }
  return fibArray;
}

console.log(fibs(-1));
console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(3));
console.log(fibs(4));
console.log(fibs(5));
console.log(fibs(6));
console.log(fibs(7));
console.log(fibs(8));
