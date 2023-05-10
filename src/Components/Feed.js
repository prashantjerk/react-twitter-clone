import React from "react";
import "./Feed.css";
import FeedPreference from "./FeedPreference";

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
      {/* Post  */}
      {/* Post  */}
      {/* Post  */}
      {/* Post  */}
      {/* Post  */}
      {/* Post  */}
      {/* Post  */}
    </div>
  );
}

export default Feed;
