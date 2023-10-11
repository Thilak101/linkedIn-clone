import React, { useState } from "react";
import "./uploadPost.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage, timeStamp } from "../../firebaseConfig";
import suitcase from "../../assets/suitcase.png";
import picture from "../../assets/picture.png";
import video from "../../assets/video-marketing.png";
import notes from "../../assets/sticky-notes.png";
import { addDoc, collection } from "firebase/firestore";
import { LinearProgress } from "@mui/material";

const UploadPost = ({ user }) => {
  const [input, setInput] = useState("");
  const [file, setImage] = useState("");
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(file);
    const storageRef = ref(storage, `/file/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        const progress =
          Math.round(snapShot.bytesTransferred / snapShot.totalBytes) * 100;
        setProgress(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await addDoc(collection(db, "posts"), {
            message: input,
            timestamp: timeStamp,
            profilePic: user.photoURL,
            username: user.displayName,
            image: downloadURL,
          });
          setProgress(0);
          setImage("");
          setInput("");
        });
      }
    );
  };

  return (
    <div className="uploadPost">
      <form action="" onSubmit={handleSubmit}>
        <div className="uploadPost__id">
          <img src={user.photoURL} alt="user" width={"40px"} />
          <div className="uploadPost__search">
            <input
              type="text"
              placeholder="start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="postUploader__input"
            />
          </div>
          <button className="uploadPost__btn">submit</button>
        </div>
        <div className="uploadPost__media">
          <div className="uploadPost__icon">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              accept="image/*"
            />
            <img src={picture} alt="" width={"20px"} />
            <p>Photo</p>
          </div>
          <div className="uploadPost__icon">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              accept="video/*"
            />
            <img src={video} alt="" width={"20px"} />
            <p>Video</p>
          </div>
          <div className="uploadPost__icon">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            />
            <img src={suitcase} alt="" width={"20px"} />
            <p>Job</p>
          </div>
          <div className="uploadPost__icon">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            />
            <img src={notes} alt="" width={"20px"} />
            <p>Write article</p>
          </div>
        </div>
      </form>
      {progress > 0 && (
        <LinearProgress variant="determinate" value={progress} />
      )}

      <div className="postUploader__post"></div>
    </div>
  );
};

export default UploadPost;
