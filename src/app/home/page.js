"use client";

import React from "react";
import { Divider, Table, Button } from "antd";
import { useRouter } from "next/navigation";

const dataSource = [
  {
    key: "1",
    title: "Title 1",
  },
  {
    key: "2",
    title: "Title 2",
  },
  {
    key: "3",
    title: "Title 3",
  },
];

const Home = () => {
  const router = useRouter();

    //  const handleView = (record) => {
    //     console.log(record)
    //  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "",
      key: "button1",
      render: () => (
        <Button type="primary" onClick={() => router.push(`/home/1`)}>
          View
        </Button>
      ),
    },
    {
      title: "",
      key: "button2",
      render: () => <Button>Edit</Button>,
    },
    {
      title: "",
      key: "button3",
      render: () => (
        <Button type="primary" danger>
          Delete
        </Button>
      ),
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-blue-400 py-9">
        <h1 className="ml-5 text-3xl text-white">My Projects</h1>
      </div>
      <div>
        <Table columns={columns} dataSource={dataSource} size="middle" />
      </div>
      <Button type="primary" ghost>
        Add Project
      </Button>
    </div>
  );
};

export default Home;
