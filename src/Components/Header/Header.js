import React from "react";
import Button from "../Button/Button";
import "./Header.scss";
import Burger from "./Burger";
import { menuItems } from "../headerTabs";
import ConnectWallet from "../ConnectWallet/ConnectWallet";
export default function Header() {
  return (
    <div id="header" className="Header">
      <div className="container">
        <div className="Header__flex">
          <p className="Header_logo">
            Sound<span>Cluster</span>
          </p>
          <div className="Header__burger">
            <Burger />
          </div>
          <div className="Header__menu">
            {menuItems.map((item, i) => (
              <button key={i} className="Header__menu-item">
                <item.icon />
                <span className="">{item.text}</span>
              </button>
            ))}
            <ConnectWallet />
          </div>
        </div>
      </div>
    </div>
  );
}
