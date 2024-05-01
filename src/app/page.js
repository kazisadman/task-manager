"use client";

import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, notification } from "antd";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState("");

  const onFinish = (values) => {
    setError('')

    console.log("Received values of form: ", values);

    if (values.username === "admin" && values.password === "123456") {
      notification.success({
        message: "Login Successful",
        description: "Welcome back!",
      });
    } else {
      setError("Incorrect username or password");
    }
  };
  return (
    <div className="flex justify-center items-center w-full">
      <Form
        name="normal_login"
        className="login-form bg-white p-5 rounded-lg mt-36"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
            {
              min: 6,
              message: "Password must be at least 6 characters long",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
