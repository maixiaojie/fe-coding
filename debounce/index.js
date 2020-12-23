/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-22 16:44:34
 * @LastEditTime: 2020-12-22 17:38:39
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

function sayDebounce() {
  console.log("我是防抖，每次触发我都会重新计算一次时间");
}

document.onclick = debounce(sayDebounce, 1000);
