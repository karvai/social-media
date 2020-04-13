import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div>
			<div>
				<img
					src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"
					alt="great"
				/>
			</div>
			<div className={style.descriptionBlock}>
				<img
					src={props.profile.photos.large}
					alt="bigAvatar"
				/>
				<p> {props.profile.aboutMe} </p>
			</div>
		</div>
	);
};

export default ProfileInfo;
