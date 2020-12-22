/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-22 15:39:41
 * @LastEditTime: 2020-12-22 15:54:36
 * @Description: 二分查找
 * @FilePath: /search/binarysearch.js
 * @powerd by hundun
 */

var sortedArr = [0, 1, 2, 4, 5, 7, 12, 14, 15, 16, 20, 24, 29, 45, 81];

/**
 * @description: 非递归实现
 * @param {*} arr
 * @param {*} target
 * @return {*}
 */
function binary_search(arr, target) {
  var low = 0,
    high = arr.length - 1;

  while (low <= high) {
    var mid = Math.floor((high + low) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(binary_search(sortedArr, 15));

/**
 * @description: 递归实现
 * @param {*} arr
 * @param {*} low
 * @param {*} high
 * @param {*} target
 * @return {*}
 */
function binary_search1(arr, low, high, target) {
  if (low > high) {
    return -1;
  }
  var mid = Math.floor((high + low) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binary_search1(arr, low, mid - 1, target);
  } else {
    return binary_search1(arr, mid + 1, high, target);
  }
}
console.log(binary_search1(sortedArr, 0, sortedArr.length - 1, 15));
