// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  let value1 = false;
  let value2 = false;
  let param = false;
  for (const item of arr1) {
    for (const element of arr2) {
      if (element > item && !param) {
        value1 = true;
      } else {
        value2 = true;
        param = true;
      }
    }
  }
  return [value1, value2];
}

console.log(result(arr1, arr2));
