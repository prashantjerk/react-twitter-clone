import React from "react";
import "./Feed.css";
import FeedPreference from "./FeedPreference";
import TweetBox from "./TweetBox";
import Post from "./Post";
import VerifiedIcon from "@mui/icons-material/Verified";


function Feed() {
  return (
    <div className="feed">
      {/* Header  */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>

      {/* For You and Following */}
      <div className="feed_preference">
        <FeedPreference text="For you" selected />
        <FeedPreference text="Following" />
      </div>

      {/* TweetBox  */}
      <TweetBox />

      {/* Post  */}
      <Post
        avatar_URL="https://avatars.githubusercontent.com/u/108537435?v=4"
        Name="Prashant Karki"
        Verified_badge={VerifiedIcon}
        twitter_handle="@prashantjerk"
        post_caption="Never gonna give you up!!"
        post_graphics="https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif"
      />
    </div>
  );
}

export default Feed;
