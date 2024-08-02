export default interface IReview {
    _id: string
    user_id: string
    product_id: string
    rating: number
    comment: string
    createdAt: string
    updatedAt: string
    __v?: number
}
