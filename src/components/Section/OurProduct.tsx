import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import productApi from '@/api/productApi'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import initProduct from '@/constants/products'
import IProduct from '@/types/product'

function OurProduct() {
    const [products, setProducts] = useState<IProduct[]>([initProduct[0]])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchProducts = useCallback(async () => {
        setIsLoading(true)
        try {
            const params = {}
            const resProduct = await productApi.getAll(params)
            setProducts(resProduct.data.data.products)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])
    return (
        <React.Fragment>
            <div className="flex items-center justify-start gap-4 mb-[13px]">
                <svg
                    width="20"
                    height="40"
                    viewBox="0 0 20 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="20" height="40" rx="4" fill="#DB4444" />
                </svg>
                <p className="font-semibold text-base leading-[20px] text-[#DB4444]">
                    Sản phẩm
                </p>
            </div>
            <h2 className="mt-[20px] text-[36px] leading-[48px] font-semibold tracking-[4%]">
                Khám phá sản phẩm của chúng tôi
            </h2>
            <div className="mt-[60px] grid grid-cols-5 gap-x-8 gap-y-[60px]">
                {isLoading &&
                    new Array(5).fill('skeleton').map((skeleton, index) => (
                        <div key={skeleton + index}>
                            <div className="w-full h-[250px] animate-pulse bg- bg-red-300 rounded-sm" />
                            <div className="mt-4 w-full h-[24px] bg-red-300 animate-pulse rounded-sm" />
                        </div>
                    ))}
                {!isLoading &&
                    products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
            </div>
            <div className="mt-[60px] grid place-items-center">
                <Button asChild className="w-[234px] h-[56px] text-base">
                    <Link to={'/products'}>View All Products</Link>
                </Button>
            </div>
        </React.Fragment>
    )
}

export default OurProduct
