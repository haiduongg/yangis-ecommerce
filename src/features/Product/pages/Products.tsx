import { useCallback, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'

import producerApi from '@/api/producerApi'
import productApi from '@/api/productApi'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import initCategories from '@/constants/categories'
import initProducers from '@/constants/producers'
import initProducts from '@/constants/products'
import FilterBar from '@/features/Product/components/FilterBar'
import ICategory from '@/types/category'
import IProducer from '@/types/producer'
import IProduct from '@/types/product'

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
        <div className="container mx-auto">
            <Helmet>
                <title>Tất cả sản phẩm</title>
            </Helmet>

            <div className="my-4">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
            <h1 className="text-3xl font-bold mb-8">Tất cả sản phẩm</h1>
            <div className="grid grid-cols-4 gap-8">
                <FilterBar
                    producers={producers}
                    categories={categories}
                    filter={filter}
                    setFilter={setFilter}
                />
                <div className="col-span-3 h-fit">
                    <div className="mb-3 flex items-center justify-between text-[14px] leading-none">
                        <p>
                            Tìm thấy{' '}
                            <span className="font-bold">{products.length}</span>{' '}
                            kết quả
                        </p>
                        <div className="flex items-center justify-end gap-3">
                            <p className="opacity-60">Sắp xếp theo:</p>
                            <Select>
                                <SelectTrigger className="w-[180px] h-[30px] focus:ring-0">
                                    <SelectValue placeholder="A-Z" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem
                                        value="name"
                                        onChange={() => (value: string) =>
                                            setSort(value)
                                        }
                                    >
                                        A-Z
                                    </SelectItem>
                                    <SelectItem
                                        value="price"
                                        onChange={() => (value: string) =>
                                            setSort(value)
                                        }
                                    >
                                        Giá thấp nhất
                                    </SelectItem>
                                    <SelectItem
                                        value="-price"
                                        onChange={() => (value: string) =>
                                            setSort(value)
                                        }
                                    >
                                        Giá cao nhất
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-[11px]">
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
