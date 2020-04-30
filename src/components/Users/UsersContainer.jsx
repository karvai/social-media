import React from 'react'
import { connect } from "react-redux";
import Users from "./Users";
import { toggleFollowing, toggleFollowingProgress, getUsers } from "../../redux/usersReducer";
import Preloader from '../Common/Preloader/Preloader';

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize)
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				toggleFollowing={this.props.toggleFollowing}
				followingInProgress={this.props.followingInProgress}
				toggleFollowingProgress={this.props.toggleFollowingProgress}
			/>
		</>
	}
};

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
}

export default connect(mapStateToProps, { toggleFollowing, toggleFollowingProgress, getUsers, })(UsersContainer);
