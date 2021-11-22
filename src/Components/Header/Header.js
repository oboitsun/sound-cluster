import React from "react";
import Button from "../Button/Button";
import Albums from "../Icons/Albums";
import AroundMe from "../Icons/AroundMe";
import DailyDigest from "../Icons/DailyDigest";
import Discover from "../Icons/Discover";
import Favorites from "../Icons/Favorites";
import "./Header.scss";
const menuItems = [
  {
    text: "Discover ",
    icon: Discover,
    path: "",
  },
  {
    text: "Around Me",
    icon: AroundMe,
    path: "",
  },
  {
    text: "Daily Digest",
    icon: DailyDigest,
    path: "",
  },
  {
    text: "Favorites",
    icon: Favorites,
    path: "",
  },
  {
    text: "Albums",
    icon: Albums,
    path: "",
  },
];
export default function Header() {
  return (
    <div id="header" className="Header">
      <div className="container">
        <div className="Header__flex">
          <p className="Header_logo">
            Sound<span>Cluster</span>
          </p>
          <div className="Header__menu">
            {menuItems.map((item, i) => (
              <button key={i} className="Header__menu-item">
                <item.icon />
                <span className="">{item.text}</span>
              </button>
            ))}
            <Button type="filled">
              <span className="">Sign In</span>
              <img alt="Sign In" src="/assets/icons/login.svg" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
