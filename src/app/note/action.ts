'use server'
import { addNote } from "@/lib/prisma"
import dayjs from "dayjs"

/**
 * 笔记保存操作
 * @params noteData: { title: string, content: string } 笔记标题和内容
 */
export async function saveNote(noteData: any) {
    const noteID = noteData.noteId // 获取noteId

    const data = {
        title: noteData.title,
        content: noteData.content,
        updateTime: new Date()
    }

    // 新增操作
    if (!noteID) return await addNote(data)
}