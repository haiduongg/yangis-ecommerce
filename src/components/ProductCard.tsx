import React from 'react'
import PropTypes from 'prop-types'

import { FaRegHeart } from 'react-icons/fa6'
import { FiEye } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'

import IProduct from '@/types/product'
import { Link } from 'react-router-dom'
import { formatMoney } from '@/utils/numberServices'
import { useDispatch } from 'react-redux'
import { addCart } from '@/redux/cartSlice'

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    isAlwayShowAddToCart: PropTypes.bool,
    isShowRating: PropTypes.bool,
    isShowDelete: PropTypes.bool,
    isShowHeart: PropTypes.bool,
}
interface IProductCard {
    product: IProduct
    isShowRating?: boolean
    isAlwayShowAddToCart?: boolean
    isShowDelete?: boolean
    isShowHeart?: boolean
}

function ProductCard({
    product,
    isAlwayShowAddToCart = false,
    isShowRating = true,
    isShowDelete = false,
    isShowHeart = true,
}: IProductCard) {
    const dispatch = useDispatch()
    const calcSalePrice = (origin: string, discount: string) => {
        const saleNumber = discount.slice(0, discount.length - 1)
        return (+origin * (+saleNumber / 100)).toString()
    }

    const handleAddCart = (product: IProduct) => {
        dispatch(addCart(product))
    }

    return (
        <React.Fragment>
            <div>
                <div className="group relative h-[250px] rounded-sm bg-neutral-200 flex items-start justify-center select-none">
                    <div className="absolute w-[55px] h-[26px] rounded-sm top-[12px] left-[12px] bg-[#db4444] z-10">
                        <p className="text-center text-white text-xs leading-[26px] tracking-wider font-medium">
                            -{product.discount}
                        </p>
                    </div>
                    <img
                        src={product.featureImage}
                        alt={product.name}
                        height={230}
                        className="h-[230px] object-contain scale-75"
                    />
                    {isShowDelete === false && (
                        <div className="absolute top-[12px] right-[12px] flex flex-col gap-2">
                            {isShowHeart === true && (
                                <button className="p-[9px] rounded-full bg-white hover:bg-neutral-100 transition duration-200">
                                    <FaRegHeart size={16} />
                                </button>
                            )}
                            <Link to={`/products/${product._id}`}>
                                <button className="p-[9px] rounded-full bg-white hover:bg-neutral-100 transition duration-200">
                                    <FiEye size={16} />
                                </button>
                            </Link>
                        </div>
                    )}
                    {isShowDelete === true && (
                        <button className="absolute top-[12px] right-[12px] p-[9px] rounded-full bg-white hover:bg-neutral-100 transition duration-200">
                            <RiDeleteBin6Line size={16} />
                        </button>
                    )}
                    <button
                        className={`${
                            isAlwayShowAddToCart === true
                                ? 'block'
                                : 'hidden group-hover:block'
                        } absolute bottom-0 h-[41px] w-full bg-black text-white text-base font-medium`}
                        onClick={() => {
                            handleAddCart(product)
                        }}
                    >
                        Thêm vào giỏ hàng
                    </button>
                </div>
                <div className="mt-4">
                    <p className="text-base font-medium">{product.name}</p>
                    {!product.discount && (
                        <p className="text-[18px] font-medium text-[#db4444] mb-2">
                            {formatMoney(product.price)}
                        </p>
                    )}
                    {product.discount && (
                        <div className="flex items-center justify-start gap-3 mb-2">
                            <p className="text-[18px] font-medium text-[#db4444]">
                                {formatMoney(
                                    calcSalePrice(
                                        product.price,
                                        product.discount
                                    )
                                )}
                            </p>
                            <p className="text-xs font-medium line-through text-gray-400">
                                {formatMoney(product.price)}
                            </p>
                        </div>
                    )}
                    {isShowRating === true && (
                        <div className="flex items-center justify-start gap-2">
                            <div className="flex items-center justify-start">
                                {new Array(2)
                                    .fill('fill')
                                    .map((item, index) => (
                                        <svg
                                            width="16"
                                            height="15"
                                            viewBox="0 0 16 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            key={index + item}
                                        >
                                            <path
                                                d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                                                fill="#FFAD33"
                                            />
                                        </svg>
                                    ))}
                                {new Array(3)
                                    .fill('outline')
                                    .map((item, index) => (
                                        <svg
                                            width="16"
                                            height="15"
                                            viewBox="0 0 16 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            key={index + item}
                                        >
                                            <path
                                                opacity="0.25"
                                                d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                                                fill="black"
                                            />
                                        </svg>
                                    ))}
                            </div>
                            <p className="text-sm leading-[21px] font-semibold">
                                (
                                {product.reviews ? product.reviews.length : '0'}
                                )
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductCard
