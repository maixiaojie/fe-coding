/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2021-01-15 18:28:57
 * @LastEditTime: 2021-01-15 18:42:41
 * @Description: vdom
 * @FilePath: /VElement/index.js
 * @powerd by hundun
 */

var VElememt = function (tagName, props, children) {
  if (!this instanceof VElememt) {
    return new VElememt(tagName, props, children);
  }
  //  不传props的情况
  if (Array.isArray(props)) {
    children = props;
    props = {};
  }

  //  设置虚拟dom的相关属性
  this.tagName = tagName;
  this.props = props || {};
  this.children = children || [];
  this.key = props ? props.key : void 666;
  var count = 0;
  this.children.forEach((child, i) => {
    if (child instanceof VElememt) {
      count += child.count;
    } else {
      children[i] = "" + child;
    }
    count++;
  });
  this.count = count;
  console.log(this);
};

VElememt.prototype.render = function () {
  var el = document.createElement(this.tagName);

  var props = this.props;
  for (let propName in props) {
    var propValue = props[propName];
    el.setAttribute(propName, propValue);
  }
  this.children.forEach((child) => {
    var childEl =
      child instanceof VElememt
        ? child.render()
        : document.createTextNode(child);
    el.appendChild(childEl);
  });

  return el;
};

var vdom = VElememt("div", { id: "container" }, [
  VElememt("h1", { style: "color: red" }, ["simple vittual dom"]),
  VElememt("p", ["hello world"]),
  VElememt("ul", [VElememt("li", ["item #1"]), VElememt("li", ["item #2"])]),
]);
