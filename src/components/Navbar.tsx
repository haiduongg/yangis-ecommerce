import { useEffect, useState } from 'react'
import { BsListNested } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa6'
import { GoArrowUpRight } from 'react-icons/go'
import { MdPerson } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

import navigates from '@/constants/navigates'
import { RootState } from '@/redux/store'
import { IProductWithQuantity } from '@/types/product'
import { motion } from 'framer-motion'

import Searchbar from './Fragment/Searchbar'

export default function Navbar() {
    const [isShowNavigates, setIsShowNavigates] = useState<boolean>(true)
    const [isExtendSearchbar, setIsExtendSearchbar] = useState<boolean>(false)

    const { cart } = useSelector((state: RootState) => state.cart)

    const calcNumberProductInCart: (cart: IProductWithQuantity[]) => number =
        function (cart) {
            let total = 0
            cart.forEach((product) => (total += product.quantity))
            return total
        }

    // const controlNavbar = () => {
    //     if (window.scrollY > 250 ) {
    //         setShow(true)
    //     }else{
    //       setShow(false)
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', controlNavbar)
    //     return () => {
    //         window.removeEventListener('scroll', controlNavbar)
    //     }
    // }, [])

    return (
        <div className="py-4 px-5 bg-gradient-to-tr from-[#cb1c22] to-[#d9503f] text-white">
            <div className="container mx-auto flex items-center justify-between">
                <div className="w-[calc(100%-268px)] flex items-center justify-start gap-[50px]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <Link
                            to={'/'}
                            className="font-rampart text-4xl leading-none font-bold"
                        >
                            Yangis
                        </Link>
                    </motion.div>

                    <div className="w-full flex items-center justify-between">
                        <nav className="w-fit text-nowrap">
                            {!isExtendSearchbar && (
                                <motion.ul
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex items-center justify-start gap-12"
                                >
                                    {navigates.map((navigate) => (
                                        <li key={navigate.id}>
                                            <NavLink
                                                to={navigate.path}
                                                target={
                                                    navigate.isDirection
                                                        ? '_'
                                                        : ''
                                                }
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
                                </motion.ul>
                            )}
                            {isExtendSearchbar && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="w-fit h-[44px] py-[6px] px-4 bg-[#6a151b] rounded-full flex items-center justify-center gap-3"
                                >
                                    <BsListNested size={24} />
                                    <p className="font-medium">
                                        Thanh điều hướng
                                    </p>
                                </motion.div>
                            )}
                        </nav>

                        <div
                            className={`${isExtendSearchbar ? 'w-[680px]' : 'w-[44px]'} flex items-center justify-end`}
                        >
                            <Searchbar
                                isExtendSearchbar={isExtendSearchbar}
                                setIsExtendSearchbar={setIsExtendSearchbar}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-6">
                    <div className="flex items-center justify-end gap-3">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <Link
                                to={'/login'}
                                className="size-[44px] p-[6px] bg-[#6a151b] rounded-full flex items-center justify-center gap-3"
                                title="Đăng ký / Đăng nhập"
                            >
                                <MdPerson size={24} />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <Link
                                to={'/wish-list'}
                                className="w-fit h-[44px] py-[6px] px-4 bg-black rounded-full flex items-center justify-center gap-3"
                                title="Danh sách yêu thích"
                            >
                                <FaHeart size={18} />
                                <p className="font-medium">Yêu thích</p>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <Link
                                to={'/cart'}
                                className="relative w-fit h-[44px] py-[6px] px-[20px] bg-black rounded-full flex items-center justify-center gap-3"
                                title="Giỏ hàng"
                            >
                                <FaShoppingCart size={18} />
                                <p className="absolute top-[5px] right-[12px] px-1 py-0.5 rounded-full text-white bg-red-500 font-semibold text-xs leading-none">
                                    {calcNumberProductInCart(cart)}
                                </p>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
