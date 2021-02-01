/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2021-02-01 16:53:24
 * @LastEditTime: 2021-02-01 16:57:59
 * @Description: rgb转16进制
 * @FilePath: /rgb2hex/index.js
 * @powerd by hundun
 */
function rgb2hex(str) {
  if (!/^rgb/g.test(str)) return str;
  const arr = str.replace(/\(|\)|(RGB|rgb)/g, "").split(",");
  const hex_arr = arr.map((num) => Number(num).toString(16));
  return "#" + hex_arr.join("");
}

console.log(rgb2hex("rgb(255,0,33)"));
