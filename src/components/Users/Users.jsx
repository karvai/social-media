import React from 'react'
import style from './Users.module.css'
import userPhotoNotSet from '../../assets/img/user.png'
import { NavLink } from 'react-router-dom'
import Axios from 'axios'

let Users = (props) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return (
		<div>
			<div>
				{pages.map((p) => {
					return <span className={props.currentPage === p ? style.currentPageNumber : style.pageNumber}
						onClick={(e) => { props.onPageChanged(p) }}>  {p} {" "}</span>
				})}
			</div>

			{props.users.map((u) => (
				<div key={u.id}>
					<div className={style.avatar}>
						<NavLink to={'/profile/' + u.id}>
							<img src={u.photos.small === null ? userPhotoNotSet : u.photos.small} alt="avatar" />
						</NavLink>
					</div>
					<div>
						{u.name}
					</div>
					<div>
						{u.status}
					</div>
					<div>
						<button
							onClick={() => {

								if (!u.followed) {
									Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
										withCredentials: true,
										headers: { "API-KEY": "dd3b13dd-5cdc-4f85-858f-405932e6c96b" }
									})
										.then(response => {
											if (response.data.resultCode === 0) {
												props.toggleFollow(u.id)
											}
										})
								}

								else {
									Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
										withCredentials: true,
										headers: { "API-KEY": "dd3b13dd-5cdc-4f85-858f-405932e6c96b" }
									})
										.then(response => {
											if (response.data.resultCode === 0) {
												props.toggleFollow(u.id)
											}
										})
								}

							}}> {u.followed ? 'Unfollow' : 'Follow'}
						</button>
					</div>
				</div>
			))
			}
		</div >
	)
}

export default Users