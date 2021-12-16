import React, { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import "./HeroSectionTabs.scss";
import RecommendedTab from "./RecommendedTab";
const tabsNames = [
  "Recommended",
  "New Releases",
  "Top Charts",
  "Moods",
  "Around You",
];
const tabs = {
  0: <RecommendedTab />,
  1: <RecommendedTab />,
  2: <RecommendedTab />,
  3: <RecommendedTab />,
  4: <RecommendedTab />,
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
        <div className="HeroSectionTabs__tabs-container">
          <div className="HeroSectionTabs__tabs">
            {tabsNames.map((tab, i) => (
              <button
                onClick={() => {
                  handleChooseTab(i);
                }}
                key={i}
                className={`tab ${
                  i === currentTab ? `active ${dir}` : ""
                } ${dir}`}
              >
                {tab}
              </button>
            ))}
            <div className="HeroSectionTabs__searchInput">
              <SearchInput />
            </div>
          </div>
          <div className="HeroSectionTabs__underline"></div>
        </div>
        <div className="HeroSectionTabs__currentTab">{tabs[currentTab]}</div>
      </div>
    </div>
  );
}
