/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-23 15:48:49
 * @LastEditTime: 2020-12-23 16:42:19
 * @Description: convert
 * @FilePath: /algorithm/convert.js
 * @powerd by wenyujie
 */

/**
 * @description: 0 -> A, 1 -> B, ... , 26 -> AA, 27-> AB, num -> ?
 * @param {*} num
 * @return {*}
 */
function convert(num) {
  if (num < 0) {
    return "";
  }
  var a = "A".charCodeAt();
  var z = "Z".charCodeAt();
  var len = z - a + 1;
  var s = "";

  while (num >= 0) {
    s = String.fromCharCode((num % len) + a) + s;
    num = Math.floor(num / len) - 1;
  }
  return s;
}
console.log(convert(200))
