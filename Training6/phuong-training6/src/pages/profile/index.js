import React, { useState } from "react";
import "./profile.scss";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/users/users.action";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { myProfile } = useSelector((state) => state.users);
  const [myInfo, setMyInfo] = useState({...myProfile});

  React.useEffect(() => {
    let dispatchProfile = bindActionCreators(getProfile, dispatch);
    dispatchProfile();
  }, [dispatch]);

  React.useEffect(() => {
    setMyInfo({...myProfile})
  }, [myProfile])

  return (
    <div className="container profile">
      <div className="row">
        <div className="col-12">
          <div>Full name: {myInfo.fullName}</div>
          <div>Email: {myInfo.email}</div>
          <div>Role: {myInfo.role}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
