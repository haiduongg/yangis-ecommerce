import React, { useCallback, useEffect, useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { IoFilter } from 'react-icons/io5'
import IProduct from '@/types/product'
import productApi from '@/api/productApi'
import ProductCard from '@/components/ProductCard'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import categories from '../../../constants/categories'
import { Button } from '../../../components/ui/button'
import { FaChevronDown } from 'react-icons/fa6'

function Products() {
    const breadcrumbs = [
        {
            id: 1,
            path: '/',
            label: 'Trang chủ',
        },
        {
            id: 2,
            path: '/products',
            label: 'Sản phẩm',
        },
    ]
    const initalProducts: IProduct = {
        _id: '66a7d238219274d2e0068b24',
        name: 'iPhone 15 Pro Max',
        featureImage:
            'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg',
        selection: {
            color: ['Titan Trắng', 'Titan Đen', 'Titan Tự nhiên', 'Titan Xanh'],
            storage: ['256GB', '512GB', '1TB'],
        },
        properties: {
            screen: {
                size: '6.7 inches',
                technology: 'Super Retina XDR OLED',
                resolution: '2796 x 1290 Pixels',
                refreshRate: '120Hz',
                type: 'Dynamic Island',
            },
            rearCamera: {
                rearCamera: [
                    'Camera chính: 48MP, 24 mm, ƒ/1.78',
                    'Camera góc siêu rộng: 12 MP, 13 mm, ƒ/2.2',
                    'Camera Tele: 12 MP',
                ],
                video: [
                    '4K@24/25/30/60 fps',
                    'HD 1080p@25/30/60 fps',
                    'HD 720p@30 fps',
                ],
                features: [
                    'Flash True Tone Thích Ứng',
                    'Photonic Engine',
                    'Deep Fusion',
                    'HDR thông minh thế hệ 5',
                    'Ảnh chân dung thế hệ mới với Focus và Depth Control',
                    'Hiệu ứng Chiếu Sáng Chân Dung với sáu chế độ',
                    'Chế độ Ban Đêm',
                ],
            },
            frontCamera: {
                frontCamera: ['12MP, ƒ/1.9'],
                video: ['4K@24/25/30/60 fps', 'HD 1080p@25/30/60 fps'],
            },
            storage: {
                RAM: '8 GB',
                storage: '256 GB',
                memoryStick: 'Không',
            },
            battery: {
                battery: '4422 mAh',
                chargingTechnology: [
                    'Sạc nhanh 20 W',
                    'Sạc không dây 15W',
                    'Sạc không dây Qi 7.5W',
                ],
                type: 'USB Type-C',
            },
        },
        price: '29290000',
        discount: '10%',
        category_id: '66a5237a51d1404e5b5ca301',
        producer_id: '669299b8d2689b4046630a33',
        reviews: [],
        createdAt: '2024-07-29T17:32:40.594Z',
        updatedAt: '2024-07-29T17:32:40.594Z',
        __v: 0,
    }
    const [products, setProducts] = useState<IProduct[]>([initalProducts])
    const [, setSort] = useState<string>('name')

    const fetchApi = useCallback(async () => {
        const params = {}
        const resProduct = await productApi.getAll(params)
        setProducts(resProduct.data.data.products)
    }, [])

    useEffect(() => {
        fetchApi()
    }, [fetchApi])

    return (
        <React.Fragment>
            <div className="my-5">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
            <h1 className="text-2xl font-bold">Tất cả sản phẩm</h1>
            <div className="mt-5 grid grid-cols-4 gap-8">
                <div className="col-span-1 border rounded-xl divide-y h-fit">
                    <h2 className="text-lg px-5 py-4 font-semibold leading-none">
                        <IoFilter
                            className="inline-block mr-3 leading-none align-middle"
                            size={23}
                        />
                        Bộ lọc tìm kiếm
                    </h2>
                    <div className="px-5 py-4">
                        <div className='flex items-center justify-between cursor-pointer'>
                            <h3 className="text-base leading-none font-semibold">
                                Hãng sản xuất
                            </h3>
                            <FaChevronDown />
                        </div>
                        <div className='mt-5 grid grid-cols-2 gap-3'>
                            {categories.map((category)=>(
                                <Button key={category._id} variant={'outline'}>
                                    {category.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="px-5 py-4">
                        <div className='flex items-center justify-between cursor-pointer'>
                            <h3 className="text-base leading-none font-semibold">
                                Danh mục
                            </h3>
                            <FaChevronDown />
                        </div>
                        <div className='mt-5 grid grid-cols-2 gap-3'>
                            {categories.map((category)=>(
                                <Button key={category._id} variant={'outline'}>
                                    {category.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="px-5 py-4">
                        <div className='flex items-center justify-between cursor-pointer'>
                            <h3 className="text-base leading-none font-semibold">
                                Mức giá
                            </h3>
                            <FaChevronDown/>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 h-fit">
                    <div className="flex items-start justify-between text-[14px] leading-none">
                        <p>
                            Tìm thấy{' '}
                            <span className="font-bold">{products.length}</span>{' '}
                            kết quả
                        </p>
                        <div className="flex items-center justify-end gap-3">
                            <p className="opacity-60">Sắp xếp theo:</p>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder='A-Z' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem
                                        value="name"
                                        onChange={() => (value: string) =>
                                            setSort(value)}
                                    >
                                        A-Z
                                    </SelectItem>
                                    <SelectItem
                                        value="price"
                                        onChange={() => (value: string) =>
                                            setSort(value)}
                                    >
                                        Giá thấp nhất
                                    </SelectItem>
                                    <SelectItem
                                        value="-price"
                                        onChange={() => (value: string) =>
                                            setSort(value)}
                                    >
                                        Giá cao nhất
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="mt-5 grid grid-cols-4 gap-x-8 gap-y-[60px]">
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Products
