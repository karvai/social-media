import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addNewPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likes={p.likes} />
  ));

  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My posts</h3>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addNewPost}>Submit</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
