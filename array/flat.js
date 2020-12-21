/*
 * @Author: 麦晓杰
 * @LastEditors: wenyujie
 * @Date: 2020-12-21 16:47:56
 * @LastEditTime: 2020-12-21 17:25:10
 * @Description: 数组相关常用方法（扁平）
 * @FilePath: /array/flat.js
 * @powerd by 麦晓杰
 */

const flat1 = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(flat(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
};

const flat2 = (array) => {
  return array.reduce((res, item) => {
    return Array.isArray(item) ? res.concat(flat2(item)) : res.concat(item);
  }, []);
};

const flat3 = (array, deep = 1) => {
  return array.reduce((res, item) => {
    return Array.isArray(item) && deep > 1
      ? res.concat(flat3(item, deep - 1))
      : res.concat(item);
  }, []);
};

let arr = [1, [3, 4, [3, 1, [1, 12, [10, 11, [7, 8]]]]], 8];
console.log(flat3(arr, 5)); //[ 1, 3, 4, 3, 1, 1, 12, 10, 11, 7, 8, 8 ]
