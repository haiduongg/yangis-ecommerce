import { IconType } from "react-icons"

export default interface ICategory {
    _id: string
    name: string
    icon?: string | IconType
    products?: string[]
    createdAt: string
    updatedAt: string
    __v?: number
}
