import React from "react";
import "./Tile.scss";
import Favorites from "../Icons/Favorites";
export default function Tile({ data }) {
  return (
    <div className="DiscoverTabs__tile">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/0/04/3001ALaced_Odyssey.jpeg"
        alt="space odyssey"
      />
      <Favorites />
      <div className="info">
        <div className="info-header">
          <p className="info-name"> New Phone Who Dis?</p>
          <p className="info-price">0.045 ETH</p>
        </div>
        <p className="info-artist">Flatbush Zombies</p>
      </div>
      <div className="shadow-top"></div>
      <div className="shadow-bottom"></div>
    </div>
  );
}
