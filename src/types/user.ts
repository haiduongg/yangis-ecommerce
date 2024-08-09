export default interface IUser {
    username: string
    password?: string
    email: string
    fullName: string
    avatar: string
    bonusPoints: number
    orderHistory: string[]
    reviews: string[]
    role: ['admin', 'member']
}
