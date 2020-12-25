/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-22 16:44:34
 * @LastEditTime: 2020-12-25 15:12:20
 * @Description: 防抖
 * @FilePath: /debounce/index.js
 * @powerd by hundun
 */

//  在n秒内重新触发，会重新开始计算时间
function debounce(fn, timeout) {
  timeout = timeout || 300;
  let timer = null;
  return function (...args) {
    var _this = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(_this, args);
    }, timeout);
  };
}

function sayDebounce(couterNum) {
  console.log(
    "我是防抖，每次触发我都会重新计算一次时间 ",
    couterNum,
    this.index++
  );
}

var counter = {
  index: 0,
};

let db_add = debounce(sayDebounce, 10).bind(counter);

// 每隔500ms调用3次自增函数， 但因为防抖的存在，这三次内只调用一次
setInterval(function (params) {
  db_add("f1");
  db_add("f2");
  db_add("f3");
}, 500);
