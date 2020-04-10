import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

	let postsElements = props.posts.map((p) => (<Post message={p.message} likes={p.likes} />));

	let onPostChange = (e) => {
		props.updateNewPostText(e.target.value)
	};

	let onAddPost = () => {
		props.addPost();
	};

	return (
		<div className={style.postsBlock}>
			<div>
				<h3>My posts</h3>
				<div>
					<textarea onChange={onPostChange} value={props.newPostText}></textarea>
				</div>
				<div>
					<button onClick={onAddPost}>Submit</button>
				</div>
			</div>
			<div className={style.posts}>{postsElements}</div>
		</div>
	);
};

export default MyPosts;
