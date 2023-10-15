function fibsRecursive(num, a = [0, 1]) {
  // edge cases
  if (num < 3)
    return `By definition, the Fibonacci Sequence begins with [0, 1]`;

  // base case
  if (a.length >= num) return a;

  // recursive case
  return fibsRecursive(num, [...a, a[a.length - 2] + a[a.length - 1]]);
}

console.log(fibsRecursive(-1));
console.log(fibsRecursive(0));
console.log(fibsRecursive(1));
console.log(fibsRecursive(2));
console.log(fibsRecursive(3));
console.log(fibsRecursive(4));
console.log(fibsRecursive(5));
console.log(fibsRecursive(6));
console.log(fibsRecursive(7));
console.log(fibsRecursive(8));
