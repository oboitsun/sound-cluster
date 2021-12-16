import React from "react";
import Socials from "../Socials/Socials";
import "./Footer.scss";
import { menuItems } from "../headerTabs";
function Footer() {
  return (
    <div className="Footer">
      <div className="container Footer__inner">
        <div className="Footer__leftSide">
          <div className="Footer__socials-mob">
            <Socials />
          </div>
          <p className="Footer_logo">
            Sound<span>Cluster</span>
          </p>
          <p className="Footer__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <p className="Footer__copyright">
            Copyright © 2021 Sound Cluster. All rights reserved.
          </p>
        </div>
        <div className="Footer__menu-items">
          {menuItems.map((item, i) => (
            <button key={i} className="Footer__menu-item">
              <item.icon />
              <span className="">{item.text}</span>
            </button>
          ))}
        </div>
        <div className="Footer__contacts">
          <Socials />
          <a className="email">Info@soundcluster.com</a>
          <a className="phone">0800 726 543</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
