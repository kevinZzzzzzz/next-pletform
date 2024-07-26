import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
function NotoPage(props: any) {
  return (
    <div className={styles.emptyPage}>
      <span>
        点击左侧{" "}
        <Button type="primary" icon={<PlusOutlined />} size="small">
          NEW
        </Button>{" "}
        按钮，开始记录!~ 🥺
      </span>
    </div>
  );
}

export default NotoPage;
