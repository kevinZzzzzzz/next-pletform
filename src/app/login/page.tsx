"use client";
import React, { useState, useEffect, memo, useCallback } from "react";
import { Button, Checkbox, Form, Input, Tabs, TabsProps } from "antd";
import styles from "./index.module.scss";
import { registerUsers } from "@/lib/action";
import { useRouter } from "next/navigation";

const LoginComp = (props: any) => {
  const [token, setToken] = useState("");
  const router = useRouter()
  const { tabNo, changeTabs } = props;
  const [loginForm] = Form.useForm(); // 登录表单
  const [registerForm] = Form.useForm(); // 注册表单
  const initialValues = {
    username: "",
    password: "",
  };
  const onFinish = async (values: any) => {
    if (tabNo == "1") {
      // const response= await signIn('credentials',{  //nextauth 登录模块
      const response = await fetch("/api/auth/callback/credentials", {
        //nextauth 登录模块
        method: "POST",
        body: JSON.stringify({
          username: values.username,
          password: values.password,
          'csrfToken': token
        }),
        headers: {
          'Content-Type': 'application/json', 
        }
      });
      console.log(response, 123123);
      
      // message.success("登录成功");
    } else {
      // message.success("注册成功");
      await registerUsers(values);
      registerForm.resetFields();
      changeTabs("1");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`//${location.host}/api/auth/csrf`);
      const { csrfToken } = await response.json();
      setToken(csrfToken);
    }
    fetchData();
  }, []);

  return (
    <Form
      name={tabNo == "1" ? "loginForm" : "registerForm"}
      form={tabNo == "1" ? loginForm : registerForm}
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Input type="hidden" name="csrfToken" value={token} />
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
          {tabNo == "1" ? "登录" : "注册"}
        </Button>
      </Form.Item>
    </Form>
  );
};
const LoginPage = (props: any) => {
  const [tabNo, setTabNo] = useState("1");
  const changeTabs = (tab: string) => {
    setTabNo(tab);
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "登录",
      children: <LoginComp tabNo="1" changeTabs={changeTabs} />,
    },
    {
      key: "2",
      label: "注册",
      children: <LoginComp tabNo="2" changeTabs={changeTabs} />,
    },
  ];

  return (
    <div className={styles.loginPage}>
      <Tabs
        activeKey={tabNo}
        items={items}
        onChange={(key) => {
          changeTabs(key);
        }}
      />
    </div>
  );
};
export default memo(LoginPage);
