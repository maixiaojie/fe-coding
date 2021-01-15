/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2021-01-15 11:18:06
 * @LastEditTime: 2021-01-15 11:31:17
 * @Description: file content
 * @FilePath: /algorithm/fibonacci.js
 * @powerd by hundun
 */

function fibonacci(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(16));

/**
 * 可缓存
 * @param {*} fn 
 */
function memozi(fn) {
  var cache = {};
  return function () {
    const key = JSON.stringify(arguments);
    var value = cache[key];
    if (!value) {
      value = [fn.apply(null, arguments)];
      cache[key] = value;
    }
    return value[0];
  };
}

const fibonacci_memozi = memozi((n) =>
  n < 2 ? n : fibonacci_memozi(n - 1) + fibonacci_memozi(n - 2)
);
console.log(fibonacci_memozi(4));
