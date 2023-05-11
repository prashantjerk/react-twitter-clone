import React from "react";
import "./TweetBox.css";
import TweetBoxIcon from "./TweetBoxIcon";
import { Avatar } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import Button from "@material-ui/core/Button";

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
        <textarea
          className="input_tweet"
          placeholder="What's happening?"
        ></textarea>
      </div>

      {/* icons */}
      <div className="tweetbox_foot">
        <div className="tweetbox_foot_icons">
          <TweetBoxIcon IconComponent={AddPhotoAlternateOutlinedIcon} />
          <TweetBoxIcon IconComponent={GifBoxOutlinedIcon} />
          <TweetBoxIcon IconComponent={PollOutlinedIcon} />
          <TweetBoxIcon IconComponent={SentimentSatisfiedOutlinedIcon} />
          <TweetBoxIcon IconComponent={CalendarMonthOutlinedIcon} />
          <TweetBoxIcon IconComponent={FmdGoodOutlinedIcon} />
        </div>

        <Button variant="contained" className="tweetBox__tweet">
          Tweet
        </Button>
      </div>
    </div>
  );
}

export default TweetBox;
