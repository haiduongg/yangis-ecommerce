import { ElementType } from 'react'
import HomePage from '@/pages/HomePage'
import SignupPage from '@/pages/SignupPage'
import LoginPage from '@/pages/LoginPage'
import WishList from '@/features/Permissions/Member/pages/WishList'
import Cart from '@/features/Permissions/Member/pages/Cart'

interface IRoute {
    id: number
    path: string
    component: ElementType
    layout?: ElementType
}

const globalRoutes: IRoute[] = [
    { id: 1, path: '/', component: HomePage },
    { id: 2, path: '/signup', component: SignupPage },
    { id: 3, path: '/login', component: LoginPage },
    { id: 4, path: '/wish-list', component: WishList },
    { id: 5, path: '/cart', component: Cart },
]

export default globalRoutes
