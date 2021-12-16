import React from "react";
import Tile from "./Tile";
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
  {
    type: "favrites",
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
  {
    type: "favrites",
    artist: "Queen",
    albumName: "The Miracle",
    albumPrice: 0.045,
    albumLink: "/",
    cover: "/assets/covers/queen.jpg",
  },
];
export default function AllCategories() {
  return (
    <div className="DiscoverTabs__tiles-grid">
      {albums.map((album, i) => (
        <Tile key={i} data={album} />
      ))}
    </div>
  );
}
