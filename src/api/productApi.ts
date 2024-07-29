import IProduct from '@/types/product'
import axiosClient from '@/api//axiosClient'

const productApi = {
    getAll: async (params: object) => {
        const url = '/product'
        return await axiosClient.get(url, { params })
    },
    getOne: async (productId: undefined | string) => {
        const url = `/product/${productId}`
        return await axiosClient.get(url)
    },
    create: async (newProduct: IProduct) => {
        const url = '/product/add'
        return await axiosClient.post(url, newProduct)
    },
    delete: (productId: string, params: object) => {
        const url = `/product/${productId}`
        return axiosClient.delete(url, { params })
    },
    update: (productId: string, updatedProduct: IProduct) => {
        const url = `/product/${productId}`
        return axiosClient.put(url, updatedProduct)
    },
}

export default productApi
