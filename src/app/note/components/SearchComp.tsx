"use client";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import Link from "next/link";
import React, { useState, useEffect, memo } from "react";
import styles from "./compStyle.module.scss";
function SearchComp(props: any) {
  const [searchText, setSearchText] = useState("");
  return (
    <div className={styles.searchComp}>
      <Input size="large" placeholder="请输入" prefix={<SearchOutlined />} />
      <Link href={"/note/edit"} className="link--unstyled">
        <Button type="primary" icon={<PlusOutlined />} size="large">
          NEW
        </Button>
      </Link>
    </div>
  );
}
export default memo(SearchComp);
