import React, { useState, useEffect, memo } from "react";
import styles from "./index.module.scss";
import { getAllNotes } from "@/lib/prisma";
import SearchInputComp from "./SearchInputComp";
import { Empty } from "antd";
import Link from "next/link";

async function NoteListComp(props: any) {
  const notes: Array<any> = await getAllNotes();
  return (
    <div className={styles.noteListComp}>
      <SearchInputComp />
      <div className={styles.noteListComp_block}>
        {notes?.length > 0 ? (
          <div className={styles.noteListComp_block_list}>
            {notes.map(([noteId, note]) => {
              return (
                <Link
                  href={`/note/${noteId}`}
                  className="link--unstyled"
                  key={noteId}
                >
                  <div className={styles.noteListComp_block_list_items}>
                    <strong>{note.title}</strong>
                    <small>{note.updateTime}</small>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}
export default memo(NoteListComp);
