/*
 * @Author: maixiaojie
 * @LastEditors: wenyujie
 * @Date: 2020-12-21 15:54:14
 * @LastEditTime: 2020-12-21 16:36:16
 * @Description: 函数柯里化
 * @FilePath: /curry/index.js
 * @powerd by maixiaojie
 */
function currying(fn, args) {
  var _this = this;
  var len = fn.length;
  var args = args || [];
  return function () {
    var _args = Array.prototype.slice.call(arguments);
    Array.prototype.push.apply(args, _args);
    console.log(fn, _args);
    if (_args.length < len) {
      return currying.call(_this, fn, _args);
    }
    return fn.apply(this, _args);
  };
}
/**
 * 实现一个add方法，使计算结果能够满足如下预期：
ad(1)(2)(3) = 6;
ad(1, 2, 3)(4) = 10;
ad(1)(2)(3)(4)(5) = 15;
 */
function ad() {
  var _args = Array.prototype.slice.call(arguments);
  var _add = function () {
    _args.push(...arguments);
    return _add;
  };
  _add.toString = function () {
    console.log(_args);
    return _args.reduce(function (a, b) {
      return a + b;
    }, 0);
  };
  return _add;
}

console.log(ad(1, 2, 3)(4).toString());
console.log(ad(1, 2, 3).toString());
console.log(ad(1)(2)(3)(4)(5).toString());


function add(a, b) {
  return a + b;
}

function curryingAdd(x) {
  return function (y) {
    return x + y;
  };
}

console.log(add(1, 2));
console.log(curryingAdd(1)(2));
