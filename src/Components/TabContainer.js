import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Personal from "./Personal";
import Work from "./Work";
import "../Styles/Tabs.css";

const TabContainer = () => (
  <div className="tabContainer">
    <Tabs>
      <TabList>
        <Tab>Personal</Tab>
        <Tab>Work</Tab>
      </TabList>
      <TabPanel>
        <Personal />
      </TabPanel>
      <TabPanel>
        <Work />
      </TabPanel>
    </Tabs>
  </div>
);

export default TabContainer;
