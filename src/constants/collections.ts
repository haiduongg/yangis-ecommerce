interface ICollection {
    id: number
    path: string
    label: string
    children?: ICollection[]
}

const collections: ICollection[] = [
    {
        id: 1,
        path: '/category/woman-fashion',
        label: "Woman's Fashion",
        children: [
            {
                id: 1.1,
                path: '/category/woman-fashion',
                label: "Woman's Fashion",
            },
        ],
    },
    {
        id: 2,
        path: '/category/men-fashion',
        label: "Men's Fashion",
        children: [
            {
                id: 2.1,
                path: '/category/woman-fashion',
                label: "Woman's Fashion",
            },
        ],
    },
    { id: 3, path: '/category/electronics', label: 'Electronics' },
    { id: 4, path: '/category/home-lifestyle', label: 'Home & Lifestyle' },
    { id: 5, path: '/category/medicine', label: 'Medicine' },
    { id: 6, path: '/category/sports-outdoor', label: 'Sports & Outdoor' },
    { id: 7, path: '/category/baby-toys', label: "Baby's & Toys" },
    { id: 8, path: '/category/groceries-pets', label: 'Groceries & Pets' },
    { id: 9, path: '/category/health-beauty', label: 'Health & Beauty' },
]

export default collections
