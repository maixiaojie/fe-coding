/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-22 16:44:34
 * @LastEditTime: 2020-12-22 16:47:48
 * @Description: 防抖
 * @FilePath: /debounce/index.js
 * @powerd by hundun
 */

//  在n秒内重新触发，会重新开始计算时间
function debounce(fn, time) {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, time);
  };
}

function sayDebounce() {
    console.log("我是防抖，每次触发我都会重新计算一次时间")
}

document.onclick = debounce(sayDebounce, 1000)