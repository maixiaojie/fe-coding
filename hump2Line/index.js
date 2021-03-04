/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2021-03-04 10:10:13
 * @LastEditTime: 2021-03-04 10:23:32
 * @Description: 驼峰下划线互转
 * @FilePath: /hump2Line/index.js
 * powerd by hundun
 */
function toHump(name) {
    return name.replace(/\_(\w)/g, function(all, letter) {
        return letter.toUpperCase()
    })
}
function toLine(name) {
    return name.replace(/([A-Z])/g, "_$1").toLowerCase()
}
console.log(toHump('get_element_by_id')) // getElementById
console.log(toHump('a_b2_345_c2345')) // aB2345C2345
console.log(toLine('getElementById')) // get_element_by_id