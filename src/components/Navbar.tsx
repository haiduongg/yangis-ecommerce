import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { GrSearch, GrCart } from 'react-icons/gr'
import { FaRegHeart } from 'react-icons/fa6'
import { GoArrowUpRight } from 'react-icons/go'

import { RootState } from '@/redux/store'

import { Input } from '@/components/ui/input'

import { IProductWithQuantity } from '@/types/product'

import navigates from '@/constants/navigates'

export default function Navbar() {
    const { cart } = useSelector((state: RootState) => state.cart)
    const { wishlist } = useSelector((state: RootState) => state.wishlist)

    const calcNumberProductInCart: (cart: IProductWithQuantity[]) => number =
        function (cart) {
            let total = 0
            cart.forEach((product) => (total += product.quantity))
            return total
        }

    return (
        <React.Fragment>
            <div className="flex items-center justify-between">
                <Link to={'/'} className="text-4xl leading-none font-bold">
                    Yangis
                </Link>

                <nav>
                    <ul className="flex items-center justify-start gap-12">
                        {navigates.map((navigate) => (
                            <li key={navigate.id}>
                                <NavLink
                                    to={navigate.path}
                                    target={navigate.isDirection ? '_' : ''}
                                    className={({
                                        isActive,
                                    }: {
                                        isActive: boolean
                                    }) =>
                                        isActive
                                            ? 'active relative'
                                            : 'nav-link relative'
                                    }
                                >
                                    <div>
                                        {navigate.label}
                                        {navigate.isDirection && (
                                            <GoArrowUpRight
                                                className="absolute top-[2px] right-[-17px]"
                                                size={12}
                                            />
                                        )}
                                    </div>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center justify-end gap-6">
                    <div className="relative w-[243px] h-[38px]">
                        <Input
                            placeholder="What are you looking for?"
                            className="placeholder:text-xs placeholder:leading-[18px] bg-neutral-100 border-none"
                        />
                        <GrSearch
                            className="absolute top-[9px] right-3 cursor-pointer"
                            size={20}
                        />
                    </div>
                    <div className="flex items-center justify-end gap-4">
                        <Link
                            to={'/wish-list'}
                            className="relative p-[6px] cursor-pointer"
                        >
                            <FaRegHeart size={20} />
                            {wishlist.length !== 0 && (
                                <p className="absolute top-[-5px] right-[-5px] px-1 py-0.5 rounded-full text-white bg-red-500 font-semibold text-xs leading-none">
                                    {wishlist.length}
                                </p>
                            )}
                        </Link>
                        <Link
                            to={'/cart'}
                            className="relative p-[6px] cursor-pointer"
                        >
                            <GrCart size={20} />
                            <p className="absolute top-[-5px] right-[-5px] px-1 py-0.5 rounded-full text-white bg-red-500 font-semibold text-xs leading-none">
                                {calcNumberProductInCart(cart)}
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
