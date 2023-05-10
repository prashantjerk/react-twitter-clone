import React from "react";
import "./TweetBox.css";
import TweetBoxIcon from "./TweetBoxIcon";
import { Avatar } from "@mui/material";
import PhotoIcon from "@material-ui/icons/Photo";

function TweetBox() {
  return (
    <div className="tweetBox">
      <div className="avatar_input">
        <Avatar
          alt="Prashant"
          src="https://avatars.githubusercontent.com/u/108537435?v=4"
          sx={{ width: 50, height: 50 }}
          className="avatar"
        />
        <input
          className="input_tweet"
          type="text"
          placeholder="What's happening?"
        />
      </div>
      {/* icons */}
      <TweetBoxIcon IconComponent={PhotoIcon} />
      <TweetBoxIcon />
      <TweetBoxIcon />
      <TweetBoxIcon />
    </div>
  );
}

export default TweetBox;
