function boundFuncTimer(obj, func, delay) {
  // Your code here
  let newFunc = func.bind(obj);
  return setTimeout(newFunc, delay);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
