import { connect } from "react-redux";
import MyPosts from "./MyPosts";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profileReducer";

let mapStateToProps = (state) => {

	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

let mapDisatchToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => {
			dispatch(updateNewPostTextAC(text))
		},
		addPost: () => {
			dispatch(addPostAC());
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDisatchToProps)(MyPosts);

export default MyPostsContainer;