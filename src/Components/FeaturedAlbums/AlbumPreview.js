import React from "react";
import "./AlbumPreview.scss";
import Play from "../Icons/Play";
const AB = "AlbumPreview";
<div className={`${AB}`}></div>;
export default function AlbumPreview({ data }) {
  return (
    <div className={`${AB}`}>
      <div className={`${AB}__coverArea`}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/0/04/3001ALaced_Odyssey.jpeg"
          alt="space odyssey"
        />
        <div className={`${AB}__play-icon`}>
          <Play />
        </div>
      </div>
      <div className={`${AB}__albumInfo`}>
        <p className={`artist`}>Flatbush Zombies</p>
        <p className={`album`}>3001: A Laced Odyssey</p>
        <p className={`album-price`}>$ 2020202020</p>
      </div>
    </div>
  );
}
