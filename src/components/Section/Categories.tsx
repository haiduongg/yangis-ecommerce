import React from 'react'
import { Link } from 'react-router-dom'

import categories from '@/constants/categories'

function Categories() {
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
                    Danh mục
                </p>
            </div>
            <div className="mt-5">
                <h2 className="mt-[11px] text-[36px] leading-[48px] font-semibold tracking-[4%]">
                    Danh mục sản phẩm
                </h2>
            </div>
            <div className="mt-[60px] grid grid-cols-6 gap-8">
                {categories.map((category) => (
                    <Link to={`/products?category=${category.name}`}>
                        <div
                            key={category._id}
                            className="h-[170px] rounded-sm border-[1px] border-neutral-400 flex flex-col items-center justify-center gap-4 transition duration-200 hover:bg-[#DB4444] hover:text-white cursor-pointer"
                        >
                            <div className="p-[6px]">
                                <category.icon size={44} />
                            </div>
                            <p className="text-base">{category.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </React.Fragment>
    )
}

export default Categories
