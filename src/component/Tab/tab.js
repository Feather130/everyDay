/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 16:12:01
 * @LastEditTime: 2019-09-19 16:55:45
 * @LastEditors: Please set LastEditors
 */
import "./tab.css";
import baseClass from "../../baseClass";

class Tab extends baseClass {
  constructor() {
    super();
    this.created();
  }
  created() {
    this.root = document.createElement("div");
    this.header = document.createElement("div");
    this.header.classList.add("tab_header");
    this.content = document.createElement("div");
    this.content.classList.add("tab_content");

    this.root.appendChild(this.header);
    this.root.appendChild(this.content);
  }

  appendChilds(child) {
    console.log(child)
  }
}

export default Tab;
