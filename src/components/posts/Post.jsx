import React from "react";
import "./post.css";
import { Avatar } from "@mui/material";
import { ThumbUp, Comment, Share, Send } from "@mui/icons-material";

const Post = ({ profilePic, image, username, timestamp, message }) => {
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__profile">
          <Avatar src={profilePic} className="post__avatar" />
          <div className="post__date">
            <h3>{username}</h3>

            <small>
              {new Date(timestamp?.toDate()).toString().slice(0, 15)}
            </small>
          </div>
        </div>
      </div>
      <div className="post__topInfo">
        <p>{message}</p>
        <img src={image} alt="" width={"90px"} />
      </div>
      <div className="post__bottom">
        <div className="post__bottom_icon">
          <ThumbUp /> <small>Like</small>
        </div>

        <div className="post__bottom_icon">
          <Comment /> <small>Comment</small>
        </div>
        <div className="post__bottom_icon">
          <Share /> <small>Share</small>
        </div>
        <div className="post__bottom_icon">
          <Send /> <small>Send</small>
        </div>
      </div>
    </div>
  );
};

export default Post;
