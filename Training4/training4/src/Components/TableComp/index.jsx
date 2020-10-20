import React from 'react';
import { Table, Space } from 'antd';
import 'antd/dist/antd.css';

const columns = [
  {
    title: 'Flag',
    dataIndex: 'flag',
    key: 'flag',
    render: (text, record) => (<img src={record.flag} alt='flag image' width="50"/>),
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Capital',
    dataIndex: 'capital',
    key: 'capital',
  },
  {
    title: 'Region',
    key: 'region',
    dataIndex: 'region',
  },
  {
    title: 'Currency',
    key: 'currency',
    render: (text, record) => (
      <Space size="middle">
        <>
          {record.currencies[0].name}
        </>
      </Space>
    ),
  },
];

export default function TableComp (props) {
    return (
        <Table rowKey={record => record.name} columns={columns} dataSource={props.items} />
    );
}
