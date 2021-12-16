import React, { useState } from "react";
import Button from "../Button/Button";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./DiscoverTabs.scss";
import Discover from "../Icons/Discover";
import CheckMark from "../Icons/CheckMark";
import AllCategories from "./AllCategories";

const DT = "DiscoverTabs";
const tabsNames = ["All Categories", "Singles", "Albums", "Sets", "Mixs"];
const tabs = {
  0: <AllCategories />,
  1: <AllCategories />,
  2: <AllCategories />,
  3: <AllCategories />,
  4: <AllCategories />,
};
export default function DiscoverTabs() {
  const [currentTab, setCurrentTab] = useState(0);
  const handleTabClick = (i) => {
    setCurrentTab(i);
  };
  return (
    <div className={DT}>
      <div className="container">
        <div className={`${DT}__header`}>
          <SectionHeading Icon={Discover} text="Discover" />
          <div className={`${DT}__tabs`}>
            {tabsNames.map((tab, i) => (
              <Button
                onClick={() => {
                  handleTabClick(i);
                }}
                type={i === currentTab ? "filled" : "non-active"}
              >
                <span className="">{tab}</span>
                <CheckMark />
              </Button>
            ))}
          </div>
          {/* <SearchInput /> */}
        </div>
        <div className={`${DT}__currentTab`}>{tabs[currentTab]}</div>
      </div>
    </div>
  );
}
