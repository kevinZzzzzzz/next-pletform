import React, { useState, useEffect, memo } from "react";
import NoteEdit from "../../components/NoteEdit";
import { getNoteDetail } from "@/lib/prisma";

async function EditComp(props: any) {
    const {id: noteId} = props.params;
    const note = await getNoteDetail(noteId);
  return <NoteEdit noteId={noteId} note={note} />;
}
export default memo(EditComp);
