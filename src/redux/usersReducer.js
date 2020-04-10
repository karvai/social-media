const TOGGLE_FOLLOW = "TOGGLE_FOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS = "SET_TOTAL_USERS"


let initialState = {
	users: [],
	pageSize: 50,
	totalUsersCount: 0,
	currentPage: 1
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
				users: action.users
			}
		}

		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.currentPage
			}
		}

		case SET_TOTAL_USERS: {
			return {
				...state,
				totalUsersCount: action.totalUsers
			}
		}

		default:
			return state;
	}
}

export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersAC = (totalUsers) => ({ type: SET_TOTAL_USERS, totalUsers })

export default usersReducer;