import React, { useCallback, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { FaChevronRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import productApi from '@/api/productApi'
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
import collections from '@/constants/collections'
import initProduct from '@/constants/products'
import IProduct from '@/types/product'

function HomePage() {
    const [products, setProducts] = useState<IProduct[]>([initProduct[0]])

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
            <Helmet>
                <title>Yangis</title>
            </Helmet>

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
