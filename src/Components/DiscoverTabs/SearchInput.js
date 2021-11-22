import React from "react";

export default function SearchInput() {
  return (
    <div className="DiscoverTabs__searchInput">
      <input type="text" placeholder={`Collection, item or user`} />
      <img src="/assets/icons/search-icon.svg" alt="search" />
    </div>
  );
}
