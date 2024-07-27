"use client";

import { Divider } from "antd";
import React, { useState, useEffect, memo, use, useMemo } from "react";
import styles from "./index.module.scss";

function PreviewComp(props: any) {
  const { previewData } = props;

  return (
    <div className={styles.previewComp}>
      <h1>{previewData.title}</h1>
      <Divider />
      <p>{previewData.content}</p>
    </div>
  );
}
export default memo(PreviewComp);
