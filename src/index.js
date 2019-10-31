/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-07 19:27:58
 * @LastEditTime: 2019-10-31 14:28:36
 * @LastEditors: Please set LastEditors
 */

import Root from "./component/Root";
import Title from "./component/Title";
import Tab from "./component/Tab";
import TabsPane from "./component/TabsPane";
import Wrapper from "./component/Wrapper";
import "./index.css";

function myCreate(Class, attributes, ...children) {
  if (typeof Class === "function") {
    let object = new Class();
    for (let name in attributes) {
      object.setAttribute(name, attributes[name]);
    }
    for (let child of children) {
      object.appendChilds(child);
    }
    return object;
  } else {
    let object = new Wrapper(Class);
    return object;
  }
}

var c = (
  <Root className="root_style">
    <Title className="title_style"></Title>
    <Tab>
      <TabsPane>
      </TabsPane>
    </Tab>
  </Root>
);
c.appendTo(document.getElementById("app"));
