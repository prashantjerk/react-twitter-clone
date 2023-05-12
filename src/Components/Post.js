import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";

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
        <div className="post_header">
          <Avatar
            alt="Prashant"
            src={avatar_URL}
            sx={{ width: 35, height: 35 }}
            className="avatar"
          />
          <h3>{Name}</h3>
          <Verified_badge />
          <span>{twitter_handle}</span>
        </div>
        <div className="actual_post">
          <p className="post_caption">{post_caption}</p>
          <img className="post_graphics" src={post_graphics} alt="gif" />
        </div>
      </div>
    </div>
  );
}

export default Post;
