/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-21 17:30:55
 * @LastEditTime: 2020-12-21 17:34:14
 * @Description: reduce
 * @FilePath: /array/reduce.js
 * @powerd by wenyujie
 */

Array.prototype.reduceToMap = function (handler) {
  return this.reduce((target, current, index) => {
    target.push(handler.call(this, current, index));
    return target;
  }, []);
};

Array.prototype.reduceToFilter = function (handler) {
  return this.reduce((target, current, index) => {
    if (handler.call(this, current, index)) {
      target.push(current);
    }
    return target;
  }, []);
};
