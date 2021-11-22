import React, { useState } from "react";
import "./HeroSectionTabs.scss";
import RecommendedTab from "./RecommendedTab";
const tabsNames = ["Recommended", "New Releases", "Top Charts", "Moods", "Around You"];
const tabs = {
  0: <RecommendedTab />,
  1: "",
  2: "",
  3: "",
  4: "",
};
export default function HeroSectionTabs() {
  const [currentTab, setCurrentTab] = useState(0);
  const [dir, setDirection] = useState("toRight");
  const handleChooseTab = (i) => {
    if (i < currentTab) {
      setDirection("toRight");
    } else if (i > currentTab) {
      setDirection("toLeft");
    }
    setCurrentTab(i);
  };
  return (
    <div className="HeroSectionTabs">
      <div className="container">
        <div className="HeroSectionTabs__tabs">
          {tabsNames.map((tab, i) => (
            <button
              onClick={() => {
                handleChooseTab(i);
              }}
              key={i}
              className={`tab ${i === currentTab ? `active ${dir}` : ""} ${dir}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="HeroSectionTabs__currentTab">{tabs[currentTab]}</div>
      </div>
    </div>
  );
}
