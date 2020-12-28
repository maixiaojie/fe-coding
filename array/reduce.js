/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-21 17:30:55
 * @LastEditTime: 2020-12-28 10:36:00
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
  return prev;
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


/**
 * 将array转为下面的格式
 * { s1: [ 'rule1' ], s2: [ 'rule2', 'rule3' ] }
 */

var array = [
  {
    selector: "s1",
    rules: "rule1",
  },
  {
    selector: "s2",
    rules: "rule2",
  },
  {
    selector: "s2",
    rules: "rule3",
  },
];

function transform(arr, key, value) {
  return arr.reduce(function (pre, item) {
    pre[item[key]] = (pre[item[key]] || []).concat(item[value]);
    return pre;
  }, {});
}

var tree = transform(array, "selector", "rules");
console.log(tree);
