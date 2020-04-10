import React from "react";
import style from "./Users.module.css";
import * as axios from "axios";
import userPhotoNotSet from "../../assets/img/user.png"

class Users extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>
			this.props.setUsers(response.data.items));
	}

	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

		let pages = []
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}

		return <div>

			<div>
				{pages.map(p => {
					return <span className={this.props.currentPage === p ? style.currentPageNumber : style.pageNumber}
						onClick={(e) => { this.onPageChanged(p) }}> {p} </span>
				})}
			</div>

			{
				this.props.users.map(u => <div key={u.id}>
					<div className={style.avatar}>
						<img src={u.photos.small === null ? userPhotoNotSet : u.photos.small} alt="avatar" />
					</div>
					<div>
						{u.name}
					</div>
					<div>
						{u.status}
					</div>
					<div>
						<button onClick={() => { this.props.toggleFollow(u.id) }}> {u.followed ? "Unfollow" : "Follow"} </button>
					</div>
				</div>)
			}
		</div >
	}
};

export default Users;
