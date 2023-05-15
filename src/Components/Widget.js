import React from "react";
import "./Widget.css";
import SearchIcon from "@mui/icons-material/Search";
import { TwitterTweetEmbed, TwitterVideoEmbed } from "react-twitter-embed";

function Widget() {
  return (
    <div className="widget">
      <div className="search">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search Twitter"
          className="search_field"
        />
      </div>
      <TwitterTweetEmbed tweetId={"1467166431036919808"} />
      <TwitterVideoEmbed id={"560070183650213889"} />
      <TwitterTweetEmbed tweetId={"1657162171586068480"} />
    </div>
  );
}

export default Widget;
// css-1dbjc4n css-1dbjc4n 