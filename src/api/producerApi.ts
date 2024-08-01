import axiosClient from '@/api//axiosClient'
import { IProducer } from '@/types/producer'

const producerApi = {
    getAll: async (params: object) => {
        const url = '/producer'
        return await axiosClient.get(url, { params })
    },
    create: async (newProducer: IProducer) => {
        const url = '/producer/add'
        return await axiosClient.post(url, newProducer)
    },
}

export default producerApi
