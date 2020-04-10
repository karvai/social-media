const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS"

let initialState = {
	users: [
		{
			id: 1, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg',
			followed: false, fullName: "Igor K", status: "I'm good man", location: { city: "London" }, country: "UK"
		},
		{
			id: 2, photoURL: 'https://pm1.narvii.com/6223/c7d64bf600b12b66226c94863838fc57531244f0_00.jpg',
			followed: true, fullName: "Pipa V", status: "I'm good man, me too", location: { city: "London" }, country: "UK"
		},
		{
			id: 3, photoURL: "https://pm1.narvii.com/6223/c7d64bf600b12b66226c94863838fc57531244f0_00.jpg",
			followed: false, fullName: "Kuka P", status: "I'm good man, lol", location: { city: "New York" }, country: "USA"
		},
	],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {

		case TOGGLE_FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: !u.followed }
					}
					return u;
				})
			}

		case SET_USERS: {
			return {
				...state,
				users: [...state.users, ...action.users]
			}
		}

		default:
			return state;
	}
}

export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;