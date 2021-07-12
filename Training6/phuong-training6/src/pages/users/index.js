import React, { useState } from "react";
import "./users.scss";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/users/users.action";
import { Table } from 'antd';

const UsersPage = () => {
  const dispatch = useDispatch();
  const { listUser } = useSelector((state) => state.users);
  const [users, setUsers] = useState(listUser);

  React.useEffect(() => {
    let dispatchGetUsers = bindActionCreators(getUsers, dispatch);
    dispatchGetUsers();
  }, [dispatch]);

  React.useEffect(() => {
    setUsers(listUser);
  }, [listUser]);
  const columns = [
    {
      title: "Full name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => <Link key={record.id} to={`/app/users/${record.id}`}>Detail</Link>,
    },
  ];

  let dataSource = users.map(user => {
      user = {key: user.id, ...user}
      return user
  })
  return (
    <div className="container users">
      <div className="row">
        <div className="col">
            <Table columns={columns} dataSource={dataSource} />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
