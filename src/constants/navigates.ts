interface INavigate {
    id: number
    path: string
    label: string
    isDirection?: boolean
}

const navigates: INavigate[] = [
    { id: 1, path: '/', label: 'Trang chủ' },
    { id: 2, path: '/products', label: 'Sản phẩm' },
    {
        id: 3,
        path: 'https://www.facebook.com/hyang.309',
        label: 'Liên hệ',
        isDirection: true,
    },
    { id: 4, path: '/about', label: 'Về chúng tôi' },
    { id: 5, path: '/signup', label: 'Đăng ký' },
]

export default navigates
