/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-22 15:12:16
 * @LastEditTime: 2020-12-22 15:16:35
 * @Description: quicksort
 * @FilePath: /sort/quick.js
 * @powerd by wenyujie
 */

var arr = [1, 9, 2, 4, 12, 0, 33, 56, 89, 1, 4, 6];

var quickSort = function (arr) {
  if (arr.length < 2) {
    return arr;
  }
  let povit = arr[0];
  let povitArr = [];
  let leftArr = [];
  let rightArr = [];

  arr.forEach((item) => {
    if (item < povit) {
      leftArr.push(item);
    } else if (item > povit) {
      rightArr.push(item);
    } else {
      povitArr.push(item);
    }
  });
  return quickSort(leftArr).concat(povitArr).concat(quickSort(rightArr));
};

console.log(quickSort(arr));
