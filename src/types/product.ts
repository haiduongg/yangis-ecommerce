import IReview from './review'

export interface IProductProperties {
    screen?: {
        size?:string
        technology?:string 
        resolution?:string 
        refreshRate?:string 
        type?:string
    }
    rearCamera?:{
        rearCamera?:string[]
        video?:string[]
        features?:string[]
    }
    frontCamera?:{
        frontCamera?:string[]
        video?:string[]
        features?:string[]
    }
    storage?:{
        RAM?:string
        storage?:string
        memoryStick?:string
    }
    battery?:{
        battery?:string
        chargingTechnology?:string[]
        type?:string
    }
}

export default interface IProduct {
    _id: string
    name: string
    featureImage: string
    selection?: { color?: string[]; storage: string[] }
    properties?: IProductProperties
    price: string
    discount?: string
    category_id: string
    producer_id: string
    reviews?: IReview[]
    createdAt: string
    updatedAt: string
    __v?: number
}
