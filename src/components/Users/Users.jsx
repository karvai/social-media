import React from "react";
import style from "./Users.module.css";

const Users = (props) => {
	return (
		<div>
			{
				props.users.map(u => <div key={u.id}>
					<div className={style.avatar}>
						<img src={u.photoURL} alt="avatar" />
					</div>
					<div>
						{u.fullName}
					</div>
					<div>
						{u.status}
					</div>
					<div>
						{u.location.city}
					</div>
					<div>
						<button onClick={() => { props.toggleFollow(u.id) }}> {u.followed ? "Unfollow" : "Follow"} </button>
					</div>
				</div>)
			}
		</div>
	)
};

export default Users;
