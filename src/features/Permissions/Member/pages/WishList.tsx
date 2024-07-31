import React from 'react'
import { Button } from '@/components/ui/button'
import products from '@/constants/products'
import ProductCard from '@/components/ProductCard'

function WishList() {
    return (
        <React.Fragment>
            <div className="mt-[80px]">
                <div className="flex items-center justify-between">
                    <p className="text-[20px] leading-[26px]">Wishlist (4)</p>
                    <Button
                        variant={'outline'}
                        className="w-[223px] h-[56px] font-medium"
                    >
                        Move All To Cart
                    </Button>
                </div>
                <div className="mt-[60px] grid grid-cols-5 gap-8">
                    {products.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                            isShowHeart={false}
                            isShowDelete={true}
                            isAlwayShowAddToCart={true}
                            isShowRating={false}
                        />
                    ))}
                </div>

                <div className="mt-[80px]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start gap-4">
                            <svg
                                width="20"
                                height="40"
                                viewBox="0 0 20 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    width="20"
                                    height="40"
                                    rx="4"
                                    fill="#DB4444"
                                />
                            </svg>
                            <p className="text-[20px] leading-[26px]">
                                Just For You
                            </p>
                        </div>
                        <Button
                            className="w-[150px] h-[56px]"
                            variant={'outline'}
                        >
                            See All
                        </Button>
                    </div>
                    <div className="mt-[60px] grid grid-cols-5 gap-8">
                        {products.map((product) => (
                            <ProductCard
                                key={product._id}
                                product={product}
                                isShowHeart={false}
                                isShowDelete={true}
                                isAlwayShowAddToCart={true}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WishList
