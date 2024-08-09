import axiosClient from '@/api//axiosClient'
import IUser from '@/types/user'

export interface IAuth {
    username?: string
    email?: string
    password: string
}

const authApi = {
    register: async (newUser: IUser) => {
        const url = '/user/register'
        return await axiosClient.post(url, newUser)
    },
    login: async (user: IAuth) => {
        const url = `/category/login`
        return await axiosClient.post(url, user)
    },
}

export default authApi
