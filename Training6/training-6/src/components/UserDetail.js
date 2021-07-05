import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const UserDetail = () => {
  const user = useSelector((state) => state.authentication.user);

  return (
    <>
      {user ? (
        <div>
          <p>{user.fullName}</p>
          <p>{user.email}</p>
        </div>
      ) : (
        <Redirect to="/app/users" />
      )}
    </>
  );
};

export default UserDetail;
