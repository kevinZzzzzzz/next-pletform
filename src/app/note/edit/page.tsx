import React, { useState, useEffect, memo } from "react";
import NoteEdit from "../components/NoteEdit";

function EditComp(props: any) {
  return <NoteEdit />;
}
export default memo(EditComp);
