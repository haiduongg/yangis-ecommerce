import { IconType } from 'react-icons'

export default interface ICategory {
    _id: string
    name: string
    icon?: IconType | string
    products?: string[]
    createdAt: string
    updatedAt: string
    __v?: number
}
