import React from 'react'
import { connect } from "react-redux";
import Users from "./Users";
import { toggleFollowAC, setUsersAC, setTotalUsersAC, setCurrentPageAC } from "../../redux/usersReducer";
import Axios from 'axios';

class UsersContainer extends React.Component {

	componentDidMount() {
		Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>
			this.props.setUsers(response.data.items));
	}

	render() {
		return <Users totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			onPageChanged={this.onPageChanged}
			users={this.props.users}
			toggleFollow={this.props.toggleFollow}
		/>
	}
};

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

export default connect(mapStateToProps, mapDisatchToProps)(UsersContainer);
