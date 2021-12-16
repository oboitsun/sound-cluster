import React from "react";
import Play from "../Icons/Play";
import "./RecommendedTab.scss";
const RT = "RecommendedTab";
const albums = [
  {
    type: "recommended",
    artist: "Queen",
    albumName: "The Miracle",
    albumPrice: 0.045,
    albumLink: "/",
    cover: "/assets/covers/queen.jpg",
  },
  {
    type: "Top Charts",
    artist: "Queen",
    albumName: "The Miracle",
    albumPrice: 0.045,
    albumLink: "/",
    cover: "/assets/covers/queen.jpg",
  },
  {
    type: "new releases",
    artist: "Queen",
    albumName: "The Miracle",
    albumPrice: 0.045,
    albumLink: "/",
    cover: "/assets/covers/queen.jpg",
  },
  {
    type: "moods",
    artist: "Queen",
    albumName: "The Miracle",
    albumPrice: 0.045,
    albumLink: "/",
    cover: "/assets/covers/queen.jpg",
  },
  {
    type: "grand",
    artist: "Queen",
    albumName: "The Miracle",
    albumPrice: 0.045,
    albumLink: "/",
    cover: "/assets/covers/queen.jpg",
  },
  {
    type: "discover",
    artist: "Queen",
    albumName: "The Miracle",
    albumPrice: 0.045,
    albumLink: "/",
    cover: "/assets/covers/queen.jpg",
  },
  {
    type: "favrites",
    artist: "Queen",
    albumName: "The Miracle",
    albumPrice: 0.045,
    albumLink: "/",
    cover: "/assets/covers/queen.jpg",
  },
];
export default function RecommendedTab() {
  return (
    <div className="RecommendedTab">
      {albums.map((album, i) => (
        <div key={i} className={`${RT}__tile ${i === 0 ? "main" : ""}`}>
          <div className={`${RT}__info`}>
            <div className={`${RT}__category`}>{album.type}</div>
            <div className={`${RT}__footer`}>
              <div className="">
                {i === 0 && <div className={`${RT}__heading new-album`}>New Album:</div>}
                {i === 0 && (
                  <div className={`${RT}__heading`}>
                    {album.artist} - {album.albumName}
                  </div>
                )}
                {i !== 0 && <div className={`${RT}__heading`}>{album.artist} </div>}
              </div>
              <div className="">
                <button className={`${RT}__playFull`}>
                  <span>Play Full Album</span>
                  <img src="/assets/icons/play.svg" alt="Play Full Album" />
                </button>

                <p className={`${RT}__albumPrice`}>0.045 ETH</p>
              </div>
            </div>
          </div>
          {i !== 0 && (
            <div className={`${RT}__play-icon`}>
              <Play />
            </div>
          )}
          <img className={`${RT}__cover`} src="/assets/covers/queen.jpg" alt="queen" />
          <div className={`${RT}__tile-shadow-top`}></div>
          <div className={`${RT}__tile-shadow-bottom`}></div>
          <div className={`${RT}__tile-shadow`}></div>
        </div>
      ))}
    </div>
  );
}
