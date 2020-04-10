const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
	posts: [
		{ id: 1, message: "Hi, how are you?", likes: 15 },
		{ id: 2, message: "This is my first post.", likes: 20 },
	],

	newPostText: "Please type your post here"
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {

		case UPDATE_NEW_POST_TEXT:
			return { ...state, newPostText: action.newPostText }

		case ADD_POST:
			let newPost = { id: 5, message: state.newPostText, likes: 0 };
			return { ...state, posts: [...state.posts, newPost], newPostText: "" }

		default:
			return state;
	}
}

export const addPostAC = () => ({ type: ADD_POST })
export const updateNewPostTextAC = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPostText: text })

export default profileReducer;