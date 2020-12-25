/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-25 18:23:10
 * @LastEditTime: 2020-12-25 18:30:37
 * @Description: 两数之和
 * @FilePath: /algorithm/twosum.js
 * @powerd by hundun
 */

var twoSum = function (nums, target) {
  if (!Array.isArray(nums)) return [];
  var map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] != undefined) {
      return [map[target - nums[i]], i];
    } else {
      map[nums[i]] = i;
    }
    console.log(map)
  }
  
  return []
};
var list = [1, 2, 6, 12, 3, 16]
console.log(twoSum(list, 3))
