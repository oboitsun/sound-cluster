import React from "react";
import "./SearchInput.scss";
export default function SearchInput() {
  return (
    <div className="SearchInput">
      <input type="text" placeholder={`Collection, item or user`} />
      <img src="/assets/icons/search-icon.svg" alt="search" />
    </div>
  );
}
