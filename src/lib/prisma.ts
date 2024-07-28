import { PrismaClient } from '@prisma/client'
import {isEmptyObject} from '@/utils/index'
import dayjs from 'dayjs'
import {auth} from './auth'

const globalForPrisma: any = global
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
    const session = await auth()
    if (!session) return []
    const notes = await prisma.note.findMany({
        where: {
            authorId: '1'
        }
    })
    const res: any = {}
    notes.forEach(({title, content, id, updatedAt}: any) => {
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
export async function addNote(data: any) {
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

/**
 * 获取笔记详情
 */
export async function getNoteDetail(uuid: any) {
    const res = await prisma.note.findFirst({
        where: {
            id: uuid
        }
    })
    return res ? {title: res.title, content: res.content, updateTime: res.updatedAt ? dayjs(res.updatedAt).format('YYYY-MM-DD HH:mm:ss') : ''} : null
}

/**
 * 更新笔记
 */
export async function updateNote(noteId: any, data: any) {
    const result = await prisma.note.update({
        where: { id: noteId },
        data: {
            title: data.title,
            content: data.content,
            // updatedAt: new Date()
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

/**
 * 删除笔记
 */
export async function deleteNote(uuid: any) {
    const result = await prisma.note.delete({
        where: {
            id: uuid
        }
    })
    console.log(result)
    return result ? {
        succ: true,
        code: successCode,
        message: successMsg,
    } : {
        succ: false,
        code: failCode,
        message: failMsg
    }
}


/**
 * 获取用户信息
 */
export async function getUser(username?: string, password?: string) {
    if (!username || !password) return false
    const user = await prisma.user.findFirst({
        where: {
            username
        },
        include: {
            notes: true
        }
    })
    // 用户不存在
    if (!user) return 0
    // 密码不正确
    if (user.password !== password) return -1
    return user ? {
        name: username,
        username,
        userId: user.id
    } : null
}

/**
 * 用户注册
 */
export async function registerUser(username?: string, password?: string) {
    if (!username || !password) return false
    const user = await prisma.user.create({
        data: {
            username,
            password,
            notes: {
                create: []
            }
        }
    })
    return {
        name: username,
        username,
        userId: user.id
    }
}
export default prisma
