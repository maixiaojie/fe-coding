/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-24 14:34:45
 * @LastEditTime: 2020-12-24 18:05:14
 * @Description: 继承
 * @FilePath: /extend/inherits.js
 * @powerd by wenyujie
 */

/**
 * @description: 继承
 * @param {*} Child
 * @param {*} Parent
 * @return {*}
 */
function inherits(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  Child.__proto__ = Parent;
}

/**
 * 构造函数绑定
 
function Animal() {
    this.species = "动物"
}
function Cat(name, color) {
    Animal.call(this, arguments)
    this.name = name;
    this.color = color;
}

var cat = new Cat('大毛', '黄色')
console.log(cat.species)

*/

/**
 * prototype 方式
 * 任何一个prototype对象都有一个constructor属性，指向它的构造函数。
 * 每一个实例也有一个constructor属性，默认调用prototype对象的constructor属性

function Animal() {
    this.species = "动物"
}
function Cat(name, color) {
    this.name = name;
    this.color = color;
}
Cat.prototype = new Animal()
Cat.prototype.constructor = Cat;

var cat = new Cat('大毛', '黄色')
console.log(cat.species)
console.log(cat instanceof Animal)
console.log(Cat.prototype.constructor === cat.constructor)
console.log(cat.constructor === Cat)
 */

/**
 *直接继承prototype


function Animal() {}
function Cat() {}
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;

var cat = new Cat();
var animal = new Animal();
console.log(cat.constructor); // [Function: Cat]
console.log(animal.constructor); // [Function: Cat]
 */

/**
 * 利用空对象作为中介

function Animal() {}
function Cat() {}

var F = function () {};
F.prototype = Animal.prototype;
Cat.prototype = new F();
Cat.prototype.constructor = Cat;

var cat = new Cat();
var animal = new Animal();
console.log(cat.constructor); // [Function: Cat]
console.log(animal.constructor); // [Function: Animal]

// 封装一下
function extend(Child, Parent) {
  var F = function () {};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
}

 */

/**
 * 拷贝继承
 */

function extend2(Child, Parent) {
  var p = Parent.prototype;
  var c = Child.prototype;
  for (var i in p) {
    console.log(i);
    c[i] = p[i];
  }
}

function Animal() {
  this.species = "动物";
}
function Cat(name, color) {
  this.name = name;
  this.color = color;
}

extend2(Cat, Animal);
var cat = new Cat("大毛", "黄色");
console.log(cat.species);
