import React from "react";
import ReactDOM from "react-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SubMenus from "../component/SubMenus";
import "../style/nav.css";
import logo1 from "../logos/paperwork.png";
import logo2 from "../logos/myenergy.jpg";
import logo from "../logos/logo.png";

export default function Nav(props) {
  return (
    <div className="Nav">
      <div style={{ backgroundColor: "rgba(0,0,0,0.75)", width: "270px" }}>
        <img
          style={{ padding: "0 50px" }}
          width="270px"
          height="70px"
          src={logo}
          alt="/"
        />
      </div>
      <Tabs>
        <TabList>
          <Tab>
            <img
              className="logo-img"
              width="40px"
              height="40px"
              alt="logo"
              src={logo1}
            />
          </Tab>
          <Tab>
            <img
              onClick={props.handler}
              className="logo-img"
              width="40px"
              height="40px"
              alt="logo"
              src={logo2}
            />
          </Tab>
          <Tab>
            <img
              onClick={props.handler}
              className="logo-img"
              width="40px"
              height="40px"
              alt="logo"
              src={logo1}
            />
          </Tab>
          <Tab>
            <img
              onClick={props.handler}
              className="logo-img"
              width="40px"
              height="40px"
              alt="logo"
              src={logo2}
            />
          </Tab>
          <Tab>
            <img
            className="logo-img"
              onClick={props.handler}
              width="40px"
              height="40px"
              alt="logo"
              src={logo1}
            />
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <SubMenus  handler={props.handler}/>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content ">
            <SubMenus />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <SubMenus />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <SubMenus />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <SubMenus />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Nav />, rootElement);
