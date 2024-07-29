"use client";
import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Dropdown, MenuProps, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { signOut, useSession } from "next-auth/react";


const logout = () => {
  signOut()
}

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <div className={styles.headerComp_logout} onClick={() => logout()}>
        退出登录
      </div>
    ),
  }
];
function HeaderComp(props: any) {
  return (
    <div className={styles.headerComp}>
      <Dropdown menu={{ items }} placement="bottom" arrow>
        <Avatar size={46} icon={<UserOutlined />} />
      </Dropdown>
    </div>
  )
}
export default HeaderComp;
