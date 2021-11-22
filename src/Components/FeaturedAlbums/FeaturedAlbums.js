import React from "react";
import Button from "../Button/Button";
import Albums from "../Icons/Albums";
import SectionHeading from "../SectionHeading/SectionHeading";
import AlbumPreview from "./AlbumPreview";
import "./FeaturedAlbums.scss";
const FB = "FeaturedAlbums";
const albums = [
  {
    type: "recommended",
    artist: "Flatbush Zombies",
    albumName: "The Miracle",
    albumPrice: 0.045,
    fiatPrice: 400000,
    albumLink: "/",
    cover: "/assets/covers/queen.jpg",
  },
  {
    type: "recommended",
    artist: "Flatbush Zombies",
    albumName: "The Miracle",
    albumPrice: 0.045,
    fiatPrice: 400000,
    albumLink: "/",
    cover: "/assets/covers/queen.jpg",
  },
  {
    type: "recommended",
    artist: "Flatbush Zombies",
    albumName: "The Miracle",
    albumPrice: 0.045,
    fiatPrice: 400000,
    albumLink: "/",
    cover: "/assets/covers/queen.jpg",
  },
  {
    type: "recommended",
    artist: "Flatbush Zombies",
    albumName: "The Miracle",
    albumPrice: 0.045,
    fiatPrice: 400000,
    albumLink: "/",
    cover: "/assets/covers/queen.jpg",
  },
  {
    type: "recommended",
    artist: "Flatbush Zombies",
    albumName: "The Miracle",
    albumPrice: 0.045,
    fiatPrice: 400000,
    albumLink: "/",
    cover: "/assets/covers/queen.jpg",
  },
];
export default function FeaturedAlbums() {
  return (
    <div className="FeaturedAlbums">
      <div className="container">
        <div className={`${FB}__header`}>
          <SectionHeading Icon={Albums} text="Featured Albums" />
          <Button>
            <span>View All Albums</span>
            <img src="/assets/icons/burger.svg" alt="View All Albums" />
          </Button>
        </div>
        <div className={`${FB}__albums-grid`}>
          {albums.map((album, i) => (
            <AlbumPreview key={i} data={album} />
          ))}
        </div>
      </div>
    </div>
  );
}
