"use client";
import React, { memo, use } from "react";
import styles from "./index.module.scss";
import { Button, Divider } from "antd";
// import Link from "next/link"
import { useRouter } from "next/navigation";

function NoteDetailComp(props: any) {
  const { note, noteId } = props;
  const router = useRouter();
  if (!note) {
    return (
      <div className={styles.emptyNote}>
        <span>
          No find the note! Please select anther note from left side! 😊
        </span>
      </div>
    );
  }
  return (
    <div className={styles.noteDetail}>
      <div className={styles.noteDetail_left}>
        <h1>{note.title}</h1>
        <Divider />
        <p>{note.content}</p>
      </div>
      <div className={styles.noteDetail_right}>
        <div className={styles.noteDetail_right_top}>
          <span>最近更新：{note.updateTime}</span>
          <Button
            type="primary"
            ghost
            onClick={() => {
              router.push(`/note/edit/${noteId}`);
            }}
          >
            EDIT
          </Button>
        </div>
      </div>
    </div>
  );
}

export default memo(NoteDetailComp);
