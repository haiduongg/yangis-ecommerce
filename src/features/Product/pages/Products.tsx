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
import { useSearchParams } from 'react-router-dom'
import initProducts from '@/constants/products';

function Products() {
    const [searchParams, setSearchParams] = useSearchParams()
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
    const [products, setProducts] = useState<IProduct[]>(initProducts)
    const [, setSort] = useState<string>('name')
    const [filter, setFilter] = useState<{
        producer: string
        category: string
        price: string
    }>({
        producer: '',
        category: '',
        price: '',
    })

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
                        <div className="flex items-center justify-between cursor-pointer">
                            <h3 className="text-base leading-none font-semibold">
                                Hãng sản xuất
                            </h3>
                            <FaChevronDown />
                        </div>
                        <div className="mt-5 grid grid-cols-2 gap-3">
                            {categories.map((category) => (
                                <Button
                                    key={category._id}
                                    variant={'outline'}
                                    onClick={() => {
                                        setFilter((pre) => ({
                                            ...pre,
                                            producer: category.name,
                                        }))
                                    }}
                                >
                                    {category.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="px-5 py-4">
                        <div className="flex items-center justify-between cursor-pointer">
                            <h3 className="text-base leading-none font-semibold">
                                Danh mục
                            </h3>
                            <FaChevronDown />
                        </div>
                        <div className="mt-5 grid grid-cols-2 gap-3">
                            {categories.map((category) => (
                                <Button
                                    key={category._id}
                                    variant={'outline'}
                                    onClick={() => {
                                        setFilter((pre) => ({
                                            ...pre,
                                            category: category.name,
                                        }))
                                    }}
                                >
                                    {category.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="px-5 py-4">
                        <div className="flex items-center justify-between cursor-pointer">
                            <h3 className="text-base leading-none font-semibold">
                                Mức giá
                            </h3>
                            <FaChevronDown />
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
