import { useSelector } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

const SubContent = (props) => {
  const users = useSelector((state) => state.user.users);
  const paramId = props.location.pathname.split("/").pop();

  const user = users.filter((user) => user.id === paramId);

  return (
    <>
      {user.length > 0 ? (
        <div style={{ textAlign: "right" }}>
          <p>{user[0].fullName}</p>
          <p>{user[0].email}</p>
        </div>
      ) : (
        <Redirect to="/app/users" />
      )}
    </>
  );
};

export default withRouter(SubContent);
