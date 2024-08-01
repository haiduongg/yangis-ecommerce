import React, { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import productApi from '@/api/productApi'
import producerApi from '@/api/producerApi'

import ProductCard from '@/components/ProductCard'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import Breadcrumbs from '@/components/Breadcrumbs'
import FilterBar from '@/features/Product/components/FilterBar'

import initProducers from '@/constants/producers'
import initCategories from '@/constants/categories'
import initProducts from '@/constants/products'

import IProduct from '@/types/product'
import IProducer from '@/types/producer'
import ICategory from '@/types/category'

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

function Products() {
    const [searchParams, setSearchParams] = useSearchParams()
    const initialFilter = {
        category: searchParams.get('category') ?? '',
        producer: searchParams.get('producer') ?? '',
        price: searchParams.get('price') ?? '',
    }
    const [products, setProducts] = useState<IProduct[]>(initProducts)
    const [producers, setProducers] = useState<IProducer[]>(initProducers)
    // TODO: Set data for category from Api
    const [categories] = useState<ICategory[]>(initCategories)
    const [, setSort] = useState<string>('name')
    const [filter, setFilter] = useState<{
        category: string
        producer: string
        price: string
    }>(initialFilter)

    const fetchApi = useCallback(async () => {
        const params = {}
        const resProducts = await productApi.getAll(params)
        const resProducers = await producerApi.getAll(params)
        // TODO: Add Category Json Api
        // const resCategories = await categoryApi.getAll(params)
        setProducts(resProducts.data.data.products)
        // setCategories(resCategories.data.data)
        setProducers(resProducers.data.data)
    }, [])
    useEffect(() => {
        fetchApi()
    }, [fetchApi])

    useEffect(() => {
        const searchParamsHandler = () => {
            const q: { category?: string; producer?: string; price?: string } =
                {}
            if (filter.category.length != 0) {
                q['category'] = filter.category
            }
            if (filter.producer.length != 0) {
                q['producer'] = filter.producer
            }
            if (filter.price.length != 0) {
                q['price'] = filter.price
            }
            setSearchParams(q)
        }
        searchParamsHandler()
    }, [filter, setSearchParams])

    return (
        <React.Fragment>
            <div className="my-5">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
            <h1 className="text-2xl font-bold">Tất cả sản phẩm</h1>
            <div className="mt-5 grid grid-cols-4 gap-8">
                <FilterBar
                    producers={producers}
                    categories={categories}
                    filter={filter}
                    setFilter={setFilter}
                />
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
                                    <SelectValue placeholder="A-Z" />
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
