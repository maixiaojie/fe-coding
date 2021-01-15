/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2021-01-15 10:06:27
 * @LastEditTime: 2021-01-15 10:53:27
 * @Description: 遍历树
 * @FilePath: /algorithm/getObjAttr.js
 * @powerd by hundun
 */

var obj = {
  a: {
    b: {
      c: 1,
      d: 2,
    },
    e: 0,
    f: {
      g: 11,
      h: 10,
    },
  },
  i: 0,
};
function isObj(o) {
  return typeof o === "object" && o !== null;
}
function getObjAttr(obj, action) {
  if (!isObj(obj)) return;
  for (let i in obj) {
    if (isObj(obj[i])) {
      getObjAttr(obj[i], action);
    } else {
      action(obj[i]);
    }
  }
}
getObjAttr(obj, console.log);
// 1
// 2
// 0
// 11
// 10
// 0
console.log("-------------");

function getObjAttr1(obj, action) {
  if (!isObj(obj)) return;
  var stack = [];
  stack.push(obj);
  while (stack.length) {
    let cur_node = stack.pop();
    if (!isObj(cur_node)) {
      action(cur_node);
    } else {
      for (let i in cur_node) {
        stack.push(cur_node[i]);
      }
    }
  }
}
getObjAttr1(obj, console.log);

// 0
// 10
// 11
// 0
// 2
// 1

console.log("-------------");
function getObjAttr2(obj, action) {
  if (!isObj(obj)) return;
  var queue = [];
  queue.push(obj);
  while (queue.length) {
    var cur_node = queue.shift();
    if (isObj(cur_node)) {
      for (let i in cur_node) {
        queue.push(cur_node[i]);
      }
    } else {
      action(cur_node);
    }
  }
}
var rs = [];
var save = function (item) {
  rs.push(item);
};
getObjAttr2(obj, save);
console.log(rs)
// 0
// 0
// 1
// 2
// 11
// 10
