import { usersAPI } from '../api/api'
const TOGGLE_FOLLOW = "TOGGLE_FOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS = "SET_TOTAL_USERS"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {
	users: [],
	pageSize: 50,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: []
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

		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching
			}
		}

		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId)
			}
		}

		default:
			return state
	}
}

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsers = (totalUsers) => ({ type: SET_TOTAL_USERS, totalUsers })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true))
		usersAPI.getUsers(currentPage, pageSize).then(data => {
			dispatch(toggleIsFetching(false))
			dispatch(setUsers(data.items))
			dispatch(setTotalUsers(data.totalCount))
		})
	}
}

export const toggleFollowing = (userId, followed) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId))
		if (!followed) {
			usersAPI.follow(userId).then(response => {
				if (response.data.resultCode === 0) {
					dispatch(toggleFollow(userId))
				}
				dispatch(toggleFollowingProgress(false, userId))
			})
		}

		else {
			dispatch(toggleFollowingProgress(true, userId))
			usersAPI.unfollow(userId).then(() => {
				dispatch(toggleFollow(userId))
				dispatch(toggleFollowingProgress(false, userId))
			})
		}
	}
}

export default usersReducer