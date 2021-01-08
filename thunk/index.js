/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2021-01-08 16:05:02
 * @LastEditTime: 2021-01-08 16:25:36
 * @Description: thunk
 * @FilePath: /thunk/index.js
 * @powerd by hundun
 */
var fs = require("fs");

// fs.readFile("./a.txt", function (err) {
//   console.log(err);
// });

var thunk = function (filename) {
  return function (callback) {
    return fs.readFile(filename, callback);
  };
};
/**
 * 在js中，thunk函数替换的不是表达式，而是多参数函数，将其替换成单参数的版本，且只接受回调函数作为参数
 */
var readFileThunk = thunk("./a.text");
readFileThunk(function (err) {
  console.log(err);
});

/**
 * 任何函数，只要参数有回调函数，就能写成Thunk函数的形式。下面是一个简单的Thunk函数转换器
 * @param {*} fn
 */
var Thunk = function (fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    return function (callback) {
      args.push(callback);
      return fn.apply(this, args);
    };
  };
};

var readFileThunk2 = Thunk(fs.readFile);

readFileThunk2("./a.text")(function (err) {
  console.log(err);
});
