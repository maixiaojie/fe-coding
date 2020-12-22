/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-21 17:30:55
 * @LastEditTime: 2020-12-22 15:32:52
 * @Description: reduce相关实现
 * @FilePath: /array/reduce.js
 * @powerd by wenyujie
 */

/**
 * @description: 实现一个reduce
 * @param {*}
 * @return {*}
 */
Array.prototype.reduce = function (callback, prev) {
  for (let i = 0; i < this.length; i++) {
    if (typeof prev === "undefined") {
      prev = callback(this[i], this[i + 1], i + 1, this);
    } else {
      prev = callback(prev, this[i], i, this);
    }
  }
};
/**
 * @description: reduce实现map
 * @param {*}
 * @return {*}
 */
Array.prototype.reduceToMap = function (handler) {
  return this.reduce((target, current, index) => {
    target.push(handler.call(this, current, index));
    return target;
  }, []);
};

/**
 * @description: reduce实现filter
 * @param {*}
 * @return {*}
 */
Array.prototype.reduceToFilter = function (handler) {
  return this.reduce((target, current, index) => {
    if (handler.call(this, current, index)) {
      target.push(current);
    }
    return target;
  }, []);
};
