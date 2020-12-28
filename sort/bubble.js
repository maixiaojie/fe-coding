/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-28 14:37:56
 * @LastEditTime: 2020-12-28 14:43:02
 * @Description: 冒泡排序
 * @FilePath: /sort/bubble.js
 * @powerd by hundun
 */

function bubble(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr
}

let arr = [1, 4, 15, 2, 18, 3, 20, 14];
console.log(bubble(arr)) // [ 1, 2, 3, 4, 14, 15, 18, 20 ]