/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-25 11:07:45
 * @LastEditTime: 2020-12-25 11:38:27
 * @Description: call apply bind
 * @FilePath: /call_apply_bind/index.js
 * @powerd by wenyujie
 */

Function.prototype.myCall = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("must be a function");
  }
  context = context || window;
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

Function.prototype.myApply = function (context) {
  if (typeof this !== "function") throw new TypeError("must be a function");
  context = context || window;
  context.fn = this;
  let result;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};

Function.prototype.myBind = function (context) {
  if (typeof this !== "function") throw new TypeError("must be a function");
  context = context || window;
  const args = [...arguments].slice(1);
  const _this = this;
  return function () {
    return _this.apply(context, ...args);
  };
};

function a(params) {}
a.myCall(global, 1, 2, 3);
a.myApply(global, [1, 2, 3]);
a.myBind(global, [1, 2, 3])();
