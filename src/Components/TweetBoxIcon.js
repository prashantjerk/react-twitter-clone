import React from "react";
import "./TweetBoxIcon.css"
function TweetBoxIcon({ IconComponent }) {
  return (
    <div className="tweetBoxIcon">
      <IconComponent />
    </div>
  );
}

export default TweetBoxIcon;
