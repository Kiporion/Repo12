// Only change code below this line
function sumFibonacci(num) {
  var sum = 0;
  var x;
  var y = 0;
  var z = 1;
  if (num < 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    for (var i = 0; i <= num; i++) {
      x = y + z;
      y = z;
      z = x;
      if (x % 2 != 0 && x <= num) {
        sum += x;
      }
    }
  }
  return sum + 1;
}
// Only change code above this line

console.log(sumFibonacci(10)); //Change this line
module.exports = sumFibonacci;
