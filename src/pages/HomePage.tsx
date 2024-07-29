import React, { useCallback, useEffect, useState } from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import collections from '@/constants/collections'
import {
    Banner,
    BestSelling,
    Categories,
    FeatureProduct,
    FlashSales,
    NewestPost,
    OurProduct,
    Services,
} from '@/components/Section/index'
import IProduct from '@/types/product'
import productApi from '@/api/productApi'

function HomePage() {
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
        price: "29290000",
        discount: '10%',
        category_id: '66a5237a51d1404e5b5ca301',
        producer_id: '669299b8d2689b4046630a33',
        reviews: [],
        createdAt: '2024-07-29T17:32:40.594Z',
        updatedAt: '2024-07-29T17:32:40.594Z',
        __v: 0,
    }
    const [products, setProducts] = useState<IProduct[]>([initalProducts])

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
            <div className="flex items-center justify-between">
                <ul className="pt-6 pr-[45px] flex flex-col">
                    {collections.map((collection) => (
                        <li
                            key={collection.id}
                            className="w-[250px] flex items-center justify-between"
                        >
                            <Link
                                to={collection.path}
                                className="text-base font-normal hover:font-semibold my-1 pt-1 pb-2"
                            >
                                {collection.label}
                            </Link>
                            {collection.children && (
                                <div className="p-1">
                                    <FaChevronRight size={16} />
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="pt-10 pl-[45px] border-l border-neutral-200">
                    <Banner />
                </div>
            </div>
            <div className="mt-[140px] pb-[60px] border-b-[1px] border-neutral-100">
                <FlashSales />
            </div>
            <div className="mt-20 pb-[70px] border-b-[1px] border-neutral-100">
                <Categories />
            </div>
            <div className="mt-[70px]">
                <BestSelling />
            </div>
            <div className="mt-[140px]">
                <FeatureProduct />
            </div>
            <div className="mt-[70px]">
                <OurProduct data={products} />
            </div>
            <div className="mt-[140px]">
                <NewestPost />
            </div>
            <div className="mt-[140px]">
                <Services />
            </div>
        </React.Fragment>
    )
}

export default HomePage
