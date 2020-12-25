/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-25 14:27:39
 * @LastEditTime: 2020-12-25 14:44:10
 * @Description: new
 * @FilePath: /new/index.js
 * @powerd by hundun
 */

/*
 1. 创建一个空对象，作为将要返回的对象实例
 2. 将这个空对象的原型，指向构造函数的prototype属性
 3. 将这个空对象赋值给函数内部的this关键字
 4. 开始执行构造函数内部的代码


 new.target 判断当前函数是否new命令调用的
 */

function myNew() {
  var args = [].slice.call(arguments);
  var constructor = args.shift();
  var context = Object.create(constructor.prototype);
  var result = constructor.apply(context, args);
  return typeof result === "object" && result !== null ? result : context;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person = myNew(Person, "老王", "30");
