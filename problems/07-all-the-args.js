function allTheArgs(func, ...args) {
  // Your code here
  return func.bind(this, ...args);
}
// const bow = (...names) => {
//   return 'You bowed to ' + names.join(' and ');
// };

// const adder = (...nums) => nums.reduce((num, sum) => sum + num);

// let addFive = allTheArgs(adder, 5);
// let bowSandy = allTheArgs(bow, 'Sandy');
// console.log(addFive());
// console.log(bowSandy());
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
