/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2021-01-15 11:45:08
 * @LastEditTime: 2021-01-15 11:50:21
 * @Description: 字符串出现次数最多的字母
 * @FilePath: /algorithm/maxCountStr.js
 * @powerd by hundun
 */
var cc = "dafsfsfasfafaqertyyuuioll,mmnnbvvsfsdfqgsafsafgff";

const count = (str) => {
  var arr = str.split("");
  var obj = {};
  var max_count = 0;
  var max = "";
  arr.forEach((item) => {
    if (obj[item] !== undefined) {
      obj[item]++;
      if (obj[item] > max_count) {
        max_count = obj[item];
        max = item;
      }
    } else {
      obj[item] = 0;
    }
  });
  console.log(obj, max, max_count);
};

count(cc);
