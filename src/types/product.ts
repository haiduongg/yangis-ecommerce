// Interface children
export interface ISelection {
    color?: { label: string; images: string[] }[]
    storage: string[]
}
export interface IProductProperties {
    screen?: {
        size?: string
        technology?: string
        resolution?: string
        refreshRate?: string
        type?: string
    }
    rearCamera?: {
        rearCamera?: string[]
        video?: string[]
        features?: string[]
    }
    frontCamera?: {
        frontCamera?: string[]
        video?: string[]
        features?: string[]
    }
    storage?: {
        RAM?: string
        storage?: string
        memoryStick?: string
    }
    battery?: {
        battery?: string
        chargingTechnology?: string[]
        type?: string
    }
}

export interface IProductWithQuantity extends IProduct {
    quantity: number
}

export default interface IProduct {
    _id: string
    name: string
    thumbnail: string
    featureImage?: string[]
    selection?: ISelection
    properties?: IProductProperties
    price: number
    discount?: string
    category_id: string
    producer_id: string
    reviews?: string[]
    createdAt: string
    updatedAt: string
    __v?: number
}
