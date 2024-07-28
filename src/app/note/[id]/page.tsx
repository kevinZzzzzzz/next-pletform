import React, { useState, useEffect, memo } from "react";
import NoteEdit from "../components/NoteEdit";
import NoteDetailComp from "../components/NoteDetailComp";
import { getNoteDetail } from "@/lib/prisma";

async function noteDetailComp(props: any) {
    const {id: noteId} = props.params;
    const note = await getNoteDetail(noteId);
    return (
        <NoteDetailComp noteId={noteId} note={note} />
    );
}
export default memo(noteDetailComp);
