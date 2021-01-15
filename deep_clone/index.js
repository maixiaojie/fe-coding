/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-25 15:18:00
 * @LastEditTime: 2021-01-15 15:22:39
 * @Description: 深拷贝
 * @FilePath: /deep_clone/index.js
 * @powerd by wenyujie
 */

function isObject(obj) {
  return typeof obj === "object" && obj != null;
}
function deepClone(source) {
  if (!isObject(source)) return source;
  var target = Array.isArray(source) ? [] : {};

  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = deepClone(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}
var source = {
  a: "1",
  b: undefined,
  c: new Date(),
};

console.log(deepClone(source));

/**
 * 解决循环引用的问题，用一个数组进行保存对象，如果已经有了，直接用。
 */


function deepClone1(initalObj, finalObj) {
  var obj = finalObj || {};
  for (let i in initalObj) {
    var prop = initalObj[i];
    if (prop === obj) {
      continue;
    }
    if (typeof prop === "object") {
      obj[i] = prop.constructor === Array ? [] : {};
      arguments.callee(prop, obj[i]);
    } else {
      obj[i] = prop;
    }
  }
  return obj;
}

console.log(deepClone1(source))