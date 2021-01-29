/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2021-01-29 10:22:03
 * @LastEditTime: 2021-01-29 10:34:45
 * @Description: 大数相加
 * @FilePath: /algorithm/bigNumberAdd.js
 * @powerd by hundun
 */

function add(n1, n2) {
  if (!n1 && !n2) return "";

  function strToArr(str) {
    if (typeof str !== "string") return [];
    return str.split("").map((item) => parseInt(item));
  }
  var p1 = strToArr(n1);
  var p2 = strToArr(n2);
  var s = 0;
  var sum = [];
  var res = "";
  while (p1.length && p2.length) {
    var l = p1[p1.length - 1] + p2[p2.length - 1] + s;
    s = l > 9 ? 1 : 0;
    sum.push(l % 10);
    p1.length--;
    p2.length--;
  }
  while (p1.length) {
    sum.push(p1[p1.length - 1] + s);
    s = 0;
    p1.length--;
  }
  while (p2.length) {
    sum.push(p2[p2.length - 1] + s);
    s = 0;
    p2.length--;
  }
  if (s !== 0) {
    sum.push(s);
  }
  res = sum.reverse().join("");
  console.log(res);
  return res;
}

add("9999", "2222");
