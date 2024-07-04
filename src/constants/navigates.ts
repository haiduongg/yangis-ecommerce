interface INavigate {
    id: number
    path: string
    label: string
    isDirection?: boolean
}

const navigates: INavigate[] = [
    { id: 1, path: '/', label: 'Home' },
    {
        id: 2,
        path: 'https://www.facebook.com/hyang.309',
        label: 'Contact',
        isDirection: true,
    },
    { id: 3, path: '/about', label: 'About' },
    { id: 4, path: '/signup', label: 'Sign Up' },
]

export default navigates
