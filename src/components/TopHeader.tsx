import React from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function TopHeader() {
    return (
        <React.Fragment>
            <div className="bg-black text-white py-[15px]">
                <div className="container mx-auto flex items-center justify-end">
                    <div className="flex items-center justify-center gap-2">
                        <p className="text-sm">
                            Summer Sale For All Swim Suits And Free Express
                            Delivery - OFF 50%!
                        </p>
                        <Link
                            to={'/shop'}
                            className="text-sm leading-[24px] font-semibold underline"
                        >
                            ShopNow
                        </Link>
                    </div>
                    <div className="ml-[231px] flex items-center justify-start gap-[5px]">
                        <p className="text-sm font-normal">English</p>
                        <div className="p-[6px]">
                            <FaChevronDown size={12} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
