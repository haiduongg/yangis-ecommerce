import React from 'react'

import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import products from '@/constants/products'

export default function FlashSales() {
    const FlashSaleCountdown = [
        {
            label: 'Days',
            value: '03',
        },
        {
            label: 'Hours',
            value: '23',
        },
        {
            label: 'Minutes',
            value: '19',
        },
        {
            label: 'Seconds',
            value: '56',
        },
    ]
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
                    Hôm nay
                </p>
            </div>

            <div className="flex items-center justify-start gap-[87px] mb-[40px]">
                <h2 className="mt-[11px] text-[36px] leading-[48px] font-semibold tracking-[4%]">
                    Khuyến mãi
                </h2>
                <div className="flex items-center justify-start">
                    {FlashSaleCountdown.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-start items-start gap-1"
                        >
                            <p
                                className={`${
                                    index === 0 && 'ml-0'
                                } ml-[17px] text-xs leading-[18px] font-medium`}
                            >
                                {item.label}
                            </p>
                            <div
                                className={`${
                                    index === 0 && 'ml-0'
                                } ml-[17px] flex items-center justify-start`}
                            >
                                <p className="font-inter font-bold text-[32px] leading-[30px] tracking-[4%]">
                                    {item.value}
                                </p>
                                {index !== FlashSaleCountdown.length - 1 && (
                                    <p className="font-bold text-[#d64b4b] ml-[17px] font-inter text-[32px] leading-[30px] tracking-[4%]">
                                        :
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-5 gap-8">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>

            <div className="mt-[60px] grid place-items-center">
                <Button className="w-[234px] h-[56px] text-base">
                    View All Products
                </Button>
            </div>
        </React.Fragment>
    )
}
