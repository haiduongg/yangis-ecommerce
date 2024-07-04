import React from 'react'
import products from '../../constants/products'
import ProductCard from '../ProductCard'
import { Button } from '../ui/button'

function OurProduct() {
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
                    Our Products
                </p>
            </div>
            <h2 className="mt-[20px] text-[36px] leading-[48px] font-semibold tracking-[4%]">
                Explore Our Products
            </h2>
            <div className="mt-[60px] grid grid-cols-5 gap-x-8 gap-y-[60px]">
                {products.concat(products).map((product) => (
                    <ProductCard key={product.id} product={product} />
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

export default OurProduct
