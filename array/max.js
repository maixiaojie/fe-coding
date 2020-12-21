/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-21 17:26:08
 * @LastEditTime: 2020-12-21 17:30:28
 * @Description: 最大值
 * @FilePath: /array/max.js
 * @powerd by wenyujie
 */

//  方法 1
const max = (arr) => arr.reduce((target, cur) => Math.max(target, cur));

let arr = [1, 2, 0, 12, 323, -12, 99];
console.log(max(arr));

// 方法 2
Math.max.apply(null, arr);
console.log(Math.max(...arr));
