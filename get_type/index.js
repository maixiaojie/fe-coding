/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-25 14:11:07
 * @LastEditTime: 2020-12-25 14:19:35
 * @Description: 获取类型
 * @FilePath: /get_type/index.js
 * @powerd by wenyujie
 */

function getType(val) {
  let str = Object.prototype.toString.call(val);
  str = str.substring(8, str.length - 1).toLowerCase();
  console.log(str);
}

getType(null);
getType(undefined);
getType();
getType(new Date());
getType(new RegExp());
getType("12");
getType(12);
getType({});
getType(function name(params) {});
