/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-25 15:18:00
 * @LastEditTime: 2020-12-25 15:22:30
 * @Description: 深拷贝
 * @FilePath: /deep_clone/index.js
 * @powerd by wenyujie
 */

function deepClone(target) {
  if (typeof target !== "object") return target;
  let obj;
  if (Array.isArray(target)) {
    obj = [];
  } else {
    obj = {};
  }
  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
      obj[prop] = deepClone(target[prop]);
    } else {
      obj[prop] = target[prop];
    }
  }
  return obj;
}

console.log(deepClone({ a: 1, b: 2, v: { d: 2 } }));

