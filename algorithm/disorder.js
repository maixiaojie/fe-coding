/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-25 18:48:33
 * @LastEditTime: 2020-12-25 18:53:18
 * @Description: 洗牌算法 数组乱序
 * @FilePath: /algorithm/disorder.js
 * @powerd by wenyujie
 */

function disorder(arr) {
  if (!Array.isArray(arr)) return arr;
  const len = arr.length;
  let cur = len - 1;
  while (cur > 0) {
    var random = Math.floor(len * Math.random());
    [arr[cur], arr[random]] = [arr[random], arr[cur]];
    cur--;
  }
  return arr;
}

var list = [1, 4, 5, 3, 15, 17, 19, 20];
console.log(disorder(list));
