import HeaderComp from "@/app/note/components/HeaderComp";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";

function NoteLayout(props: any) {
  const { children } = props;
  let leftHeaderComp = null;
  let leftMainComp = null;
  let rightMainComp = null;
  children.forEach((d: any) => {
    const { slot } = d.props;
    if (slot === "leftHeader") {
      leftHeaderComp = d;
    }
    if (slot === "leftMain") {
      leftMainComp = d;
    }
    if (slot === "main") {
      rightMainComp = d;
    }
  });
  return (
    <div className={styles.noteLayout}>
      <div className={styles.noteLayout_left}>
        <Link href={"/note"} className="link--unstyled">
          <div className={styles.noteLayout_left_header}>
            <img src="/logoIcon.png" alt="" />
            <h1>{leftHeaderComp}</h1>
          </div>
        </Link>
        <div className={styles.noteLayout_left_main}>{leftMainComp}</div>
      </div>
      <div className={styles.noteLayout_right}>
        <HeaderComp />
        <div className={styles.noteLayout_right_main}>{rightMainComp}</div>
      </div>
    </div>
  );
}
export default NoteLayout;
