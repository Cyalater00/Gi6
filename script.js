//  EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2

function avgNumbers(arry){
    let sum = 0;
    for (let i = 0; i < arry.length; i++) {
      sum += arry[i];
    }     
    let avg = sum / arry.length;

    return avg
}
console.log(avgNumbers([1,7,3,8]))

// MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
function targetPivot(num,target){
    let left = -1;
    for(let i = 0; i<num.length; i++){
        if(num[i] === target){
            left = num.indexOf(num[i]);
        }
    }
    return left;
}

console.log(targetPivot([4,5,6,7,0,1,2], 0));
console.log(targetPivot([4,5,6,7,0,1,2], 3))



// HARD: Create two buttons, one that when clicked turns the background of the body red. The other, when clicked, turns the body's background color white. Each of the background colors should be defined as class styles and when the buttons are pushed the body's classList is updated to include the correct class for the background. 
// Create a single function that takes an input className and updates the body's classList to ONLY include that className


let buttonred = document.getElementById("buttonred");
let buttonwhite = document.getElementById("buttonwhite");
let body = document.body;

function changeRed() {
  body.classList.add("buttonred");
  body.classList.remove("buttonwhite");
}

function changeWhite() {
  body.classList.add("buttonwhite");
  body.classList.remove("buttonred");
}

buttonred.addEventListener("click", changeRed);
buttonwhite.addEventListener("click", changeWhite);



// *VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  pseudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

function fewestCoin(coins, amount) {
  if (amount < 1) {
    return 0;
  }

  const cache = Array(amount + 1);
  cache.fill(0);

  return coinChange(coins, amount, cache);
}

function coinChange(coins, remainder, cache) {
  if (remainder < 0) {
    return -1;
  }

  if (remainder === 0) {
    return 0;
  }

  if (cache[remainder] !== 0) {
    return cache[remainder];
  }

  let minimum = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    const resultChange = coinChange(coins, remainder - coin, cache);
    if (resultChange >= 0 && resultChange < minimum) {
      minimum = 1 + resultChange;
    }
  }

  cache[remainder] = minimum === Number.MAX_SAFE_INTEGER ? -1 : minimum;

  return cache[remainder];
}

console.log(fewestCoin([1, 2, 5], 11));
console.log(fewestCoin([2], 3));