import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi, how are you?", likes: 15 },
    { id: 2, message: "This is my first post.", likes: 20 },
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} likes={p.likes} />
  ));

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
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
