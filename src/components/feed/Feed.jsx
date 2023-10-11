import React, { useEffect, useState } from "react";
import "./feed.css";
import UploadPost from "../uploadPost/UploadPost";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Post from "../posts/Post";

const Feed = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapShot) => {
      setPosts(
        snapShot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    });
  }, []);

  console.log(posts);

  return (
    <div>
      <UploadPost user={user} />
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        );
      })}
    </div>
  );
};

export default Feed;
