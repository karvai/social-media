import React from "react";
import style from "./Users.module.css";
import * as axios from "axios";
import userPhotoNotSet from "../../assets/img/user.png"

class Users extends React.Component {

	componentDidMount() {
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>
			this.props.setUsers(response.data.items));
	}

	render() {
		return <div>
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
