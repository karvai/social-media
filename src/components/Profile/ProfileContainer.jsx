import React from "react"
import Profile from "./Profile"
import { connect } from "react-redux"
import { setUserProfile } from '../../redux/profileReducer'
import { withRouter } from "react-router-dom"
import { usersAPI } from "../../api/api"

class ProfileContainer extends React.Component {

	componentDidMount() {
		usersAPI.getProfile(this.props.match.params.userId)
			.then(data => {
				this.props.setUserProfile(data)
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
