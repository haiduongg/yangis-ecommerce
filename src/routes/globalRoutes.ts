import { ElementType } from 'react'
import HomePage from '@/pages/HomePage'
import SignupPage from '@/pages/SignupPage'
import LoginPage from '@/pages/LoginPage'
import Error from '@/pages/Error'
// Permission
import Cart from '@/features/Permissions/Member/pages/Cart'
import WishList from '@/features/Permissions/Member/pages/WishList'
import Checkout from '@/features/Permissions/Member/pages/Checkout'
// Product
import Products from '@/features/Product/pages/Products'
import ProductDetail from '@/features/Product/pages/ProductDetail'

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
