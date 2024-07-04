export default interface IProduct {
    id: string
    name: string
    featureImage: string
    price: string
    discountPercent?: number
    salePrice?: string
    rating: number
    totalReview?: number
}
