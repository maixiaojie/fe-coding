/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-22 16:38:53
 * @LastEditTime: 2020-12-22 16:43:38
 * @Description: 节流
 * @FilePath: /throttle/index.js
 * @powerd by hundun
 */

//  在n秒内只执行一次
const throttle = function (fn, time) {
  let canRun = true;
  return () => {
    if (canRun) {
      canRun = false;
      setTimeout(() => {
        canRun = true;
        fn();
      }, time);
    }
  };
};

function sayThrottle() {
    console.log("我是节流，我在固定的时间内执行一次")
}


window.onscroll = throttle(sayThrottle, 1000)