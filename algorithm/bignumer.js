/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-23 15:06:44
 * @LastEditTime: 2020-12-23 15:46:51
 * @Description: 大数相加
 * @FilePath: /algorithm/bignumer.js
 * @powerd by wenyujie
 */

/**
 * @description: 给定两个大数字符串，返回相加之和（字符串）
 * @param {*} n1
 * @param {*} n2
 * @return {*}
 */
function add(n1, n2) {
  if (!n1 && !n2) {
    return "";
  }
  function toArr(str) {
    return str.split("").map((e) => parseInt(e));
  }
  let p1 = toArr(n1);
  let p2 = toArr(n2);

  var sum = [],
    s = 0;

  while (p1.length != 0 && p2.length != 0) {
    s = p1[p1.length - 1] + p2[p2.length - 1] + s;
    sum.push(s % 10);
    s = s > 9 ? 1 : 0;
    p1.length--;
    p2.length--;
  }
  while (p1.length != 0) {
    sum.push(p1[p1.length - 1] + s);
    s = 0;
    p1.length--;
  }
  while (p2.length != 0) {
    sum.push(p2[p2.length - 1] + s);
    s = 0;
    p2.length--;
  }
  if (s != 0) {
    sum.push(s);
  }

  sum = sum.reverse().join("");
  return sum;
}

console.log(add("9999999999", "6666666666")); // 16666666665
