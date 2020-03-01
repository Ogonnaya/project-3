import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";

import Customer from "./Customer";
import Planner from "./Planner";

import classnames from "classnames";

const Example = props => {
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Customer
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Vendor
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Customer />
        </TabPane>
        <TabPane tabId="2">
          <Planner />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Example;
=======
    const [activeTab, setActiveTab] = useState("1");

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === "1" })}
                        onClick={() => {
                            toggle("1");
                        }}
                    >
                        Customer
          </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === "2" })}
                        onClick={() => {
                            toggle("2");
                        }}
                    >
                        Vendor
          </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Customer />
                </TabPane>
                <TabPane tabId="2">
                    <Planner />
                </TabPane>
            </TabContent>
        </div>
    );
};

export default Example;
>>>>>>> 8e553aa2b849f6df4a890a342da02f2c9e1cff37
