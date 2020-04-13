import React from "react"
import Profile from "./Profile"
import Axios from "axios"
import { connect } from "react-redux"
import { setUserProfile } from '../../redux/profileReducer'
import { withRouter } from "react-router-dom"

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId
		Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${!userId ? 2 : userId}`)
			.then(response => {
				this.props.setUserProfile(response.data)
			});
	}

	render() {
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} />
			</div>
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);
