import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UserDetail = () => {
  const { id } = useParams();
  const { listUser } = useSelector((state) => state.users);
  const [userDetail, setUserDetail] = useState({
    id: "",
    fullName: "",
    email: "",
    role: "",
  });

  React.useEffect(() => {
    let user = listUser.find((user) => user.id === id);
    if (user) {
        setUserDetail(user);
    }
  }, [id, listUser]);

  console.log(userDetail)

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p>Full name: {userDetail.fullName}</p>
          <p>Email: {userDetail.email}</p>
          <p>Role: {userDetail.role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
