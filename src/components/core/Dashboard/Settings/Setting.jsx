import React from "react";
import ChangeProfilePic from "./ChangeProfilePic";
import EditProfile from "./EditProfile";
import UpdatePassword from "./UpdatePassword";
import DeleteAccount from "./DeleteAccount";

const Setting = () => {

    return (
        <div className="text-richblack-5">

            <h1 className="text-3xl font-semibold mb-14">Edit Profile</h1>

            <ChangeProfilePic />
            {/* Profile */}
            <EditProfile />
            {/* Password */}
            <UpdatePassword />
            {/* Delete Account */}
            <DeleteAccount />

        </div>
    )

}

export default Setting