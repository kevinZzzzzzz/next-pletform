"use client";
import React, { useState, useEffect, memo } from "react";
import { Button, Checkbox, Form, Input, Tabs, TabsProps } from "antd";
import styles from "./index.module.scss";

const LoginComp = (props: any) => {
    const {tabNo} = props
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const initialValues = {
    username: "",
    password: "",
  };
  return (
    <Form
      name="loginForm"
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="账号"
        name="username"
        rules={[{ required: true, message: "请输入账号!" }]}
      >
        <Input placeholder="请输入账号!" />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: "请输入密码!" }]}
      >
        <Input.Password placeholder="请输入密码!" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          {tabNo == '1' ? '登录' :'注册'}
        </Button>
      </Form.Item>
    </Form>
  );
};
const items: TabsProps["items"] = [
  {
    key: "1",
    label: "登录",
    children: <LoginComp tabNo='1'/>,
  },
  {
    key: "2",
    label: "注册",
    children: <LoginComp tabNo='2'/>,
  },
];

const LoginPage = (props: any) => {
  return (
    <div className={styles.loginPage}>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};
export default memo(LoginPage);
