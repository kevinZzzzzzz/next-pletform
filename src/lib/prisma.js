import { PrismaClient } from '@prisma/client'
import {isEmptyObject} from '@/utils/index'
import dayjs from 'dayjs'

const globalForPrisma = global
export const prisma = globalForPrisma.prisma || new PrismaClient()

export const successCode = 200
export const failCode = 500
export const successMsg = '操作成功'
export const failMsg = '操作失败'

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

/**
 * 获取当前用户的全部笔记
 */
export async function getAllNotes() {
    const notes = await prisma.note.findMany({
        where: {
            authorId: '1'
        }
    })
    const res = {}
    notes.forEach(({title, content, id, updatedAt}) => {
        res[id] = {
            title,
            content,
            updateTime: updatedAt ? dayjs(updatedAt).format('YYYY-MM-DD HH:mm:ss') : ''
        }
    })
    return isEmptyObject(res) ? [] : Object.entries(res)
}

/**
 * 新增笔记
 */
export async function addNote(data) {
    const result = await prisma.note.create({
        data: {
            title: data.title,
            content: data.content,
            authorId: '1'
        }
    })
    return !!result.id ? {
        succ: true,
        code: successCode,
        message: successMsg,
    } : {
        succ: false,
        code: failCode,
        message: failMsg
    }
}


export default prisma
