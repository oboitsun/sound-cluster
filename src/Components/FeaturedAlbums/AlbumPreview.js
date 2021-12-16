import React from "react";
import "./AlbumPreview.scss";
import Play from "../Icons/Play";
const AP = "AlbumPreview";

export default function AlbumPreview({ data }) {
  return (
    <div className={`${AP}`}>
      <div className={`${AP}__coverArea`}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/0/04/3001ALaced_Odyssey.jpeg"
          alt="space odyssey"
        />
        <div className={`${AP}__play-icon`}>
          <Play />
        </div>
      </div>
      <div className={`${AP}__albumInfo`}>
        <p className={`artist`}>Flatbush Zombies</p>
        <p className={`album`}>3001: A Laced Odyssey</p>
        <p className={`album-price`}>$ 2020202020</p>
      </div>
    </div>
  );
}
