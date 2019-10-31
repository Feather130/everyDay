/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 15:39:27
 * @LastEditTime: 2019-09-19 16:37:41
 * @LastEditors: Please set LastEditors
 */

const PROPERTY_SYMBOL = Symbol("property");
const ATTRIBUTE_SYMBOL = Symbol("attribute");
const EVENT_SYMBOL = Symbol("event");
const STATE_SYMBOL = Symbol("state");

class baseClass {
  constructor() {
    this[PROPERTY_SYMBOL] = Object.create(null);
    this[ATTRIBUTE_SYMBOL] = Object.create(null);
    this[EVENT_SYMBOL] = Object.create(null);
    this[STATE_SYMBOL] = Object.create(null);
  }

  appendTo(ele) {
    ele.appendChild(this.root);
  }

  appendChilds(child) {
    this.root.appendChild(child.root);
  }

  getAttribute(name) {
    if (name == "className") {
      return this.root.getAttribute("className");
    }
    return this[ATTRIBUTE_SYMBOL][name];
  }

  setAttribute(name, value) {
    if (name === "className") {
      let cssList = value.split(" ");
      for (let css of cssList) {
        if (css) {
          this.root.classList.add(css);
          if (!this[ATTRIBUTE_SYMBOL].className) {
            this[ATTRIBUTE_SYMBOL].className = [];
          }
          this[ATTRIBUTE_SYMBOL].className.push(css);
        }
      }
      return;
    }

    return (this[ATTRIBUTE_SYMBOL][name] = value);
  }
}

export default baseClass;
