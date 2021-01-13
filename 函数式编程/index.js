/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2021-01-13 17:01:50
 * @LastEditTime: 2021-01-13 17:40:50
 * @Description: file content
 * @FilePath: /函数式编程/index.js
 * @powerd by hundun
 */

/**
 * 通用的编程原则：
 * DIY don't repeat yourself
 * 高内聚低耦合  loose coupling high cohesion
 * YAGNI  ya ain't need it  你不会用到它的
 * 最小意外原则  Principle of least surprise
 * 单一原则  single responsibility
 */

/**

 函数式“一等公民”

 实际上说的是它和其他对象都一样。函数没什么特殊的，你可以像对待其他数据类型一样对待他们，
 把他们存在数组里，当做参数传递，赋值给变量等等。
  */

const hi = (name) => `hi ${name}`;
const greeting = (name) => hi(name);

console.log(hi);
console.log(hi("jones"));

console.log(greeting("jack"));

/**
  纯函数的好处
  纯函数是这样一种函数，级相同的输入，永远会得到相同的输出，而且没有任何课观察的副作用
*/
var xs = [1, 2, 3, 4, 5];
var r1 = xs.slice(0, 3);
console.log(r1);
var r2 = xs.slice(0, 3);
console.log(r2);

var r3 = xs.splice(0, 3);
console.log(r3, xs);
var r4 = xs.splice(0, 3);
console.log(r4);

/**
在函数式编程中，我们讨厌这种会改变数据的笨函数，我们追求的是那种可靠的，每次都能返回同样结果的
函数，而不是像splice 这样每次调用后都把数据弄的一团糟的函数，这不是我们想要的。
 */

// 不纯的
var minimum = 21;

var checkAge = function (age) {
  return age >= minimum;
};

// 纯的
var checkAge2 = function (age) {
  var minimum = 21;
  return age >= minimum;
};

/**
 * 我们也可以让minimum成为一个不可变的对象（immutable）,这样就能保留纯粹性，因为状态不会有变化。
 */
var immutableState = Object.freeze({
  minimum: 21,
});
