import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ReplyAllOutlinedIcon from "@mui/icons-material/ReplyAllOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import InsightsIcon from "@mui/icons-material/Insights";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

function Post({
  avatar_URL,
  Name,
  Verified_badge,
  twitter_handle,
  post_caption,
  post_graphics,
}) {
  return (
    <div className="post">
      <div className="post_container">
        <Avatar
          alt="Prashant"
          src={avatar_URL}
          sx={{ width: 35, height: 35 }}
          className="avatar"
        />
        <div className="post_body">
          <div className="post_header">
            <div className="post_header_left">
              <h3>{Name}</h3>
              <Verified_badge />
              <span>{twitter_handle}</span>
            </div>
            <div className="post_header_threedots">
              <MoreHorizOutlinedIcon />
            </div>
          </div>
          <div className="actual_post">
            <p className="post_caption">{post_caption}</p>
            <img className="post_graphics" src={post_graphics} alt="gif" />
          </div>
          <div className="post_footer_icons">
            <ModeCommentOutlinedIcon />
            <ReplyAllOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <InsightsIcon />
            <IosShareOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
