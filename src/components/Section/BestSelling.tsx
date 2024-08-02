import React from 'react'

import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import products from '@/constants/products'

function BestSelling() {
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
                    Tháng này
                </p>
            </div>
            <div className="mt-[12px] flex items-end justify-between">
                <h2 className="mt-[8px] text-[36px] leading-[48px] font-semibold tracking-[4%]">
                    Sản phẩm bán chạy
                </h2>
                <Button className="w-[159px] h-[56px] text-base">
                    Xem tất cả
                </Button>
            </div>
            <div className="mt-[60px] grid grid-cols-5 gap-8">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </React.Fragment>
    )
}

export default BestSelling
