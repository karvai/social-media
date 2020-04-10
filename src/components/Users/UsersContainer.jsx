import { connect } from "react-redux";
import Users from "./Users";
import { toggleFollowAC, setUsersAC, setTotalUsersAC, setCurrentPageAC } from "../../redux/usersReducer";

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
	}
}

let mapDisatchToProps = (dispatch) => {
	return {
		toggleFollow: (userId) => {
			dispatch(toggleFollowAC(userId))
		},

		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},

		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber))
		},

		setTotalUsersCount: (totalUsers) => {
			dispatch(setTotalUsersAC(totalUsers))
		}
	}
}

export default connect(mapStateToProps, mapDisatchToProps)(Users);
