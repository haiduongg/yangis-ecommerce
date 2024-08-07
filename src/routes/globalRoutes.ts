import { ElementType } from 'react'

import Cart from '@/features/Permissions/Member/pages/Cart'
import Checkout from '@/features/Permissions/Member/pages/Checkout'
import WishList from '@/features/Permissions/Member/pages/WishList'
import ProductDetail from '@/features/Product/pages/ProductDetail'
import Products from '@/features/Product/pages/Products'
import Error from '@/pages/Error'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'

interface IRoute {
    id: number
    path: string
    element: ElementType
    handle?: { crumb: () => string }
    layout?: ElementType
}

const globalRoutes: IRoute[] = [
    {
        id: 1,
        path: '/',
        element: HomePage,
        handle: {
            crumb: () => 'Home',
        },
    },
    {
        id: 2,
        path: '/signup',
        element: SignupPage,
        handle: {
            crumb: () => 'Sign up',
        },
    },
    {
        id: 3,
        path: '/login',
        element: LoginPage,
        handle: {
            crumb: () => 'Login',
        },
    },
    {
        id: 4,
        path: '/wish-list',
        element: WishList,
        handle: {
            crumb: () => 'Wishlist',
        },
    },
    {
        id: 5,
        path: '/cart',
        element: Cart,
        handle: {
            crumb: () => 'Cart',
        },
    },
    { id: 6, path: '/check-out', element: Checkout },
    { id: 7, path: '/products/', element: Products },
    { id: 8, path: '/products/:id', element: ProductDetail },
    { id: 99, path: '/*', element: Error },
]

export default globalRoutes
