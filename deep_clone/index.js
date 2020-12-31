/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-25 15:18:00
 * @LastEditTime: 2020-12-30 18:44:16
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
