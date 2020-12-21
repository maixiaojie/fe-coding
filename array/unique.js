/*
 * @Author: 麦晓杰
 * @LastEditors: wenyujie
 * @Date: 2020-12-21 16:47:56
 * @LastEditTime: 2020-12-21 17:12:00
 * @Description: 数组相关常用方法（去重）
 * @FilePath: /array/unique.js
 * @powerd by 麦晓杰
 */

/**
 * 数组去重
 * @description: 使用Object开辟一个外部存储空间用于表示元素是否出现过
 * @param {*} array
 * @return {*}
 */
// const unique = (array) => {
//   var container = {};
//   return array.filter((item) => {
//     return container.hasOwnProperty(item) ? false : (container[item] = true);
//   });
// };

// const arr = [1, 2, 2, 3, 4, 4, 5, 12, 12, 14];
// console.log(unique(arr)); // [ 1, 2, 3, 4, 5, 12, 14 ]

/**
 * @description: indexOf + filter
 * @param {*} arr
 * @return {*}
 */
// const unique = (arr) => arr.filter((e, i) => arr.indexOf(e) === i);
// const arr = [1, 2, 2, 3, 4, 4, 5, 12, 12, 14];
// console.log(unique(arr)); // [ 1, 2, 3, 4, 5, 12, 14 ]

/**
 * @description: Set
 * @param {*} arr
 * @return {*}
 */
// const unique = (arr) => Array.from(new Set(arr));
// const arr = [1, 2, 2, 3, 4, 4, 5, 12, 12, 14];
// console.log(unique(arr)); // [ 1, 2, 3, 4, 5, 12, 14 ]

/**
 * @description: Set
 * @param {*} arr
 * @return {*}
 */
// const unique = (arr) => [...new Set(arr)];
// const arr = [1, 2, 2, 3, 4, 4, 5, 12, 12, 14];
// console.log(unique(arr)); // [ 1, 2, 3, 4, 5, 12, 14 ]

/**
 * @description:
 * @param {*} array
 * @return {*}
 */
// const unique = (array) => {
//   array.sort((a, b) => a - b);
//   let pre = 0;
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (!i || array[i] != array[pre]) {
//       result.push(array[i]);
//     }
//     pre = i;
//   }
//   return result;
// };
// const arr = [1, 2, 2, 3, 4, 4, 5, 12, 12, 14, 4, 3, 1, 9, 1];
// console.log(unique(arr)); // [ 1, 2, 3, 4, 5, 9, 12, 14 ]

/**
 * @description: 过滤重复值，只要出现了重复次，就将其移除
 * @param {*} arr
 * @return {*}
 */
const filterNonUnique = (arr) =>
  arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

const arr = [1, 2, 2, 3, 4, 4, 5, 12, 12, 14, 4, 3, 1, 9, 1];
console.log(filterNonUnique(arr)); // [ 5, 9, 14 ]
