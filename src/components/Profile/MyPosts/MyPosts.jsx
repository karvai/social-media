import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" likes="15" />
        <Post message="This is my first post." likes="20" />
      </div>
    </div>
  );
};

export default MyPosts;
