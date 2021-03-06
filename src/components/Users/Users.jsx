import React from 'react'
import style from './Users.module.css'
import userPhotoNotSet from '../../assets/img/user.png'
import { NavLink } from 'react-router-dom'

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
						<button disabled={props.followingInProgress.some(id => id === u.id)}
							onClick={() => { props.toggleFollowing(u.id, u.followed) }}> {u.followed ? 'Unfollow' : 'Follow'}
						</button>
					</div>
				</div>
			))
			}
		</div >
	)
}

export default Users