// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  const binary = (num >>> 0)
    .toString(2)
    .split("")
    .filter((x) => Number(x));
  const total = binary.reduce((a, b) => Number(a) + Number(b));
  return total;
}

console.log(result(number));
