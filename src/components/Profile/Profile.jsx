import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"
          alt="great"
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          alt=""
        />
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
