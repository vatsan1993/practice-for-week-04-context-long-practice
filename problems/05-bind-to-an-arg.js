function bindToAnArg(func, arg) {
  // Your code here
  return func.bind(this, arg);
}

// function iSpy(thing) {
//   return 'I spy a ' + thing;
// }

// let spyTree = bindToAnArg(iSpy, 'tree');
// let spyCar = bindToAnArg(iSpy, 'car');
// function iSpy(thing) {
//   return 'I spy a ' + thing;
// }

// console.log(iSpy('potato'));
// console.log(spyTree());
// console.log(spyTree('potato'));
// console.log(spyTree());
// console.log(spyCar());
// console.log(spyCar('potato'));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
