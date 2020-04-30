import React from "react"
import Profile from "./Profile"
import { connect } from "react-redux"
import { getUserProfile } from '../../redux/profileReducer'
import { withRouter } from "react-router-dom"

class ProfileContainer extends React.Component {

	componentDidMount() {

		this.props.getUserProfile(this.props.match.params.userId)

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

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
