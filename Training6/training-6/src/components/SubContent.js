import { useSelector } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

const SubContent = (props) => {
  const users = useSelector((state) => state.user.users);
  const paramId = props.location.pathname.split("/").pop();
  const user = users.find((user) => user.id === paramId);

  return (
    <>
      {user ? (
        <div style={{ textAlign: "right" }}>
          <p>{user.fullName}</p>
          <p>{user.email}</p>
        </div>
      ) : (
        <Redirect to="/app/users" />
      )}
    </>
  );
};

export default withRouter(SubContent);
