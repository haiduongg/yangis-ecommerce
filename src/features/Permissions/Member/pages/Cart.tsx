import { Helmet } from 'react-helmet-async'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaChevronRight, FaMinus, FaPlus } from 'react-icons/fa'
import { FaTicketSimple } from 'react-icons/fa6'
import { FcApproval } from 'react-icons/fc'
import { GoGift } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Breadcrumbs from '@/components/Breadcrumbs'
import { Checkbox } from '@/components/ui/checkbox'
import {
    decrementQuantity,
    incrementQuantity,
    removeAll,
    removeCart,
} from '@/redux/cartSlice'
import { RootState } from '@/redux/store'
import { formatMoney } from '@/utils/numberServices'

const breadcrumbs = [
    { id: 1, path: '/', label: 'Trang chủ' },
    { id: 2, path: '/', label: 'Giỏ hàng' },
]

function Cart() {
    const dispatch = useDispatch()
    const { cart, total } = useSelector((state: RootState) => state.cart)

    const Shipping = 0

    const handleRemoveCart = (productId: string) => {
        dispatch(removeCart(productId))
    }

    const calcSalePrice = (origin: number, discount: string) => {
        const saleNumber = discount.slice(0, discount.length - 1)
        return (origin * (+saleNumber / 100)).toString()
    }

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Giỏ hàng</title>
            </Helmet>

            <div className="my-4">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
            <h1 className="text-3xl font-bold mb-8">Giỏ hàng của bạn</h1>
            <div>
                {cart.length == 0 && (
                    <div className="w-full my-[80px]">
                        <p className="text-center">
                            Không tìm thấy sản phẩm nào trong giỏ hàng.
                        </p>
                    </div>
                )}
                {cart.length > 0 && (
                    <div className="mt-4 grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <div className="bg-white w-full flex items-center justify-between px-4 py-[10px] rounded-xl">
                                <div className="flex items-center gap-x-3">
                                    <Checkbox id="all" />
                                    <label
                                        htmlFor="all"
                                        className="text-[14px] leading-[24px] font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Chọn tất cả ({cart.length})
                                    </label>
                                </div>
                                <button
                                    title="Xóa tất cả"
                                    onClick={() => {
                                        dispatch(removeAll())
                                    }}
                                >
                                    <AiOutlineDelete size={20} />
                                </button>
                            </div>

                            {cart.map((product) => (
                                <div
                                    key={product._id}
                                    className="rounded-xl px-4 pt-[10px] pb-[45px] flex items-center gap-x-3 bg-white mt-[10px]"
                                >
                                    <Checkbox id={product._id} />
                                    <div className="flex gap-x-3 w-[calc(100%-28px)]">
                                        <div className="p-2 border rounded-lg">
                                            <img
                                                src={product.thumbnail}
                                                alt={product.name}
                                                className="size-[50px] object-contain"
                                            />
                                        </div>

                                        <div className="w-[calc(100%-68px)] flex items-start justify-between">
                                            <div>
                                                <p className="text-base leading-[24px] font-medium">
                                                    {product.name}
                                                </p>
                                                <div className="mt-1 text-[14px] leading-[20px] py-[6px] px-[10px] bg-wallground-light w-fit rounded-md">
                                                    Màu: Đen
                                                </div>
                                            </div>

                                            <div className="h-[60px] flex items-center justify-end gap-6">
                                                {product.discount && (
                                                    <div className="flex flex-col items-end justify-center">
                                                        <p className="text-base leading-[24px] text-red-500 font-medium">
                                                            {formatMoney(
                                                                calcSalePrice(
                                                                    product.price,
                                                                    product.discount
                                                                )
                                                            )}
                                                        </p>
                                                        <p className="mt-1 text-xs leading-none line-through text-gray-400 font-medium">
                                                            {formatMoney(
                                                                product.price
                                                            )}
                                                        </p>
                                                    </div>
                                                )}
                                                {!product.discount && (
                                                    <div className="flex flex-col items-end">
                                                        <p className="text-base leading-[24px] text-red-500 font-medium">
                                                            {formatMoney(
                                                                product.price
                                                            )}
                                                        </p>
                                                    </div>
                                                )}

                                                <div className="flex items-center justify-center">
                                                    <button
                                                        className="text-[24px] size-[32px] border flex items-center justify-center rounded-tl-md rounded-bl-md hover:bg-wallground-light transition duration-200"
                                                        onClick={() => {
                                                            dispatch(
                                                                decrementQuantity(
                                                                    product._id
                                                                )
                                                            )
                                                        }}
                                                    >
                                                        <FaMinus size={10} />
                                                    </button>
                                                    <p className="border-t border-b size-[32px] flex items-center justify-center">
                                                        {product.quantity}
                                                    </p>
                                                    <button
                                                        className="text-[24px] size-[32px] border flex items-center justify-center rounded-tr-md rounded-br-md hover:bg-wallground-light transition duration-200"
                                                        onClick={() => {
                                                            dispatch(
                                                                incrementQuantity(
                                                                    product._id
                                                                )
                                                            )
                                                        }}
                                                    >
                                                        <FaPlus size={10} />
                                                    </button>
                                                </div>
                                                <button
                                                    title="Xóa"
                                                    onClick={() => {
                                                        handleRemoveCart(
                                                            product._id
                                                        )
                                                    }}
                                                >
                                                    <AiOutlineDelete
                                                        size={20}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-span-1">
                            <div className="sticky top-[10px]">
                                <div className="bg-white w-full flex items-center justify-between px-4 py-[10px] rounded-xl">
                                    <div className="flex items-center gap-x-3">
                                        <GoGift />
                                        <p className="text-[14px] leading-[24px] font-medium">
                                            Quà tặng
                                        </p>
                                    </div>
                                    <button
                                        title="Xóa tất cả"
                                        className="text-[14px] leading-[24px] font-medium opacity-60"
                                    >
                                        Xem quà (0)
                                    </button>
                                </div>
                                <div className="mt-[10px] p-4 bg-white rounded-xl flex flex-col gap-3">
                                    <button className="rounded-lg p-3 bg-wallground-light flex items-center justify-between">
                                        <div className="flex items-center justify-start gap-3">
                                            <FaTicketSimple
                                                size={20}
                                                className="text-[#dc2626]"
                                            />
                                            <p className="text-[14px] leading-[20px] font-medium">
                                                Chọn hoặc nhập ưu đãi
                                            </p>
                                        </div>
                                        <FaChevronRight size={13} />
                                    </button>
                                    <div className="border rounded-lg flex items-center justify-start gap-3 p-3">
                                        <FcApproval size={20} />
                                        <p className="text-[14px] leading-[20px] font-medium">
                                            Đổi 0 điểm (~0đ)
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-base leading-[24px] font-medium">
                                            Thông tin đơn hàng
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <p className="text-xs leading-[18px] opacity-95">
                                                Tổng tiền
                                            </p>
                                            <p className="text-base leading-[24px] font-medium">
                                                {formatMoney(total)}
                                            </p>
                                        </div>
                                        <div className="h-[1px] w-full bg-gray-300" />
                                        <div className="flex items-center justify-between">
                                            <p className="text-xs leading-[18px] opacity-95">
                                                Tổng khuyến mãi
                                            </p>
                                            <p className="text-base leading-[24px] font-medium">
                                                {formatMoney(total)}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="text-xs leading-[18px] opacity-95">
                                                Phí vận chuyển
                                            </p>
                                            <p className="text-xs leading-[18px] font-medium">
                                                {Shipping === 0
                                                    ? 'Miễn phí'
                                                    : formatMoney(Shipping)}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between border-t border-gray-300 border-dashed pt-2">
                                            <p className="text-xs leading-[18px] opacity-95">
                                                Cần thanh toán
                                            </p>
                                            <p className="text-base leading-[24px] font-medium text-red-500">
                                                {formatMoney(total + Shipping)}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="text-xs leading-[18px] opacity-95">
                                                Điểm thưởng
                                            </p>
                                            <p className="text-base leading-[24px] font-medium">
                                                +
                                                {(total / 100).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                    <Link
                                        to={'/check-out'}
                                        className="w-full h-[56px] leading-[56px] text-center rounded-md bg-[#df2121] hover:bg-[#b81a1a] text-white font-semibold transition duration-200"
                                    >
                                        Xác nhận đơn
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart
