/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-23 16:53:33
 * @LastEditTime: 2020-12-23 17:16:04
 * @Description: arr to tree
 * @FilePath: /algorithm/arrToTree.js
 * @powerd by wenyujie
 */

var list = [
  {
    id: 1,
    pid: 0,
    name: "1",
  },
  {
    id: 2,
    pid: 1,
    name: "1 - 1",
  },
  {
    id: 3,
    pid: 1,
    name: "1 - 2",
  },
  {
    id: 4,
    pid: 2,
    name: "1 - 1 - 1",
  },
];

function arrToTree(arr) {
  var result = [];
  if (!Array.isArray(arr)) return result;

  const map = {};
  arr.forEach((item) => {
    map[item.id] = item;
  });
  arr.forEach((item) => {
    const parent = map[item.pid];
    if (parent) {
      (parent.children || (parent.children = [])).push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}

console.log(arrToTree(list))
