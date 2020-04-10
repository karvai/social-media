import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
	return (
		<div className={style.item}>
			<img
				src="https://diy-magazine.s3.amazonaws.com/d/diy/Artists/C/Circa-Waves/_landscape/image2_200227_140306.jpg"
				alt="avatar"
			/>
			{props.message}
			<div>{props.likes} likes</div>
		</div>
	);
};

export default Post;
