function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
            return true;
        }
    }
}
return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

if (require.main === module) {
  // add your own custom tests in here
  console.log(hasTargetSum([1, 2, 3, 4, 5], 5)); 
  //expected output: true, since 2 and 3 add up to 5
  console.log(hasTargetSum([-2, -1, 0, 1, 2], -1)); 
  //expected output: true, since -2 and 1 add up to -1



  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
