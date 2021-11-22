import React from "react";
import "./Home.scss";
import HeroSectionTabs from "../../Components/HeroSectionTabs/HeroSectionTabs";
import FeaturedAlbums from "../../Components/FeaturedAlbums/FeaturedAlbums";
import DiscoverTabs from "../../Components/DiscoverTabs/DiscoverTabs";

export default function Home() {
  return (
    <div id="home-page" className="container">
      <HeroSectionTabs />
      <FeaturedAlbums />
      <DiscoverTabs />
    </div>
  );
}
