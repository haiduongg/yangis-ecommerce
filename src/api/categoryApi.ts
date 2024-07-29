import axiosClient from '@/api//axiosClient'
import ICategory from '@/types/category'

const categoryApi = {
    getAll: async (params: object) => {
        const url = '/category'
        return await axiosClient.get(url, { params })
    },
    getOne: async (categoryId: string) => {
        const url = `/category/${categoryId}`
        return await axiosClient.get(url)
    },
    create: async (newCategory: ICategory) => {
        const url = '/category/add'
        return await axiosClient.post(url, newCategory)
    },
}

export default categoryApi
