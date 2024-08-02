import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FiDelete } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Breadcrumbs from '@/components/Breadcrumbs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    decrementQuantity,
    deleteCart,
    incrementQuantity,
} from '@/redux/cartSlice'
import { RootState } from '@/redux/store'
import { formatMoney } from '@/utils/numberServices'

const breadcrumbs = [
    { id: 1, path: '/', label: 'Home' },
    { id: 2, path: '/', label: 'Cart' },
]

function Cart() {
    const dispatch = useDispatch()
    const { cart, total } = useSelector((state: RootState) => state.cart)

    const Shipping = 0

    const handleDeleteCart = (productId: string) => {
        dispatch(deleteCart(productId))
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>Giỏ hàng</title>
            </Helmet>

            <div className="mt-[80px]">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <div className="mt-[80px]">
                    {cart.length == 0 && (
                        <div className="w-full mb-[80px]">
                            <p className="text-center">
                                Không tìm thấy sản phẩm nào trong giỏ hàng.
                            </p>
                        </div>
                    )}
                    {cart.length > 0 && (
                        <table className="w-full">
                            <thead className="grid grid-cols-12 shadow-xxl py-5">
                                <th className="col-span-4">Sản phẩm</th>
                                <th className="col-span-2">Giá tiền</th>
                                <th className="col-span-3">Số lượng</th>
                                <th className="col-span-2">Thành tiền</th>
                                <th className="col-span-1"></th>
                            </thead>
                            {
                                <tbody>
                                    {cart.map((product) => (
                                        <tr
                                            key={product._id}
                                            className="grid grid-cols-12 py-5 mt-10 items-center"
                                        >
                                            <td className="col-span-4 ml-10 flex items-center">
                                                <img
                                                    src={product.featureImage}
                                                    alt={product.name}
                                                    className="size-[54px]"
                                                />
                                                <p className="ml-5">
                                                    {product.name}
                                                </p>
                                            </td>
                                            <td className="col-span-2 text-center">
                                                {formatMoney(product.price)}
                                            </td>
                                            <td className="col-span-3 flex items-center justify-center gap-5">
                                                <Button
                                                    className="w-[40px]"
                                                    onClick={() => {
                                                        dispatch(
                                                            decrementQuantity(
                                                                product._id
                                                            )
                                                        )
                                                    }}
                                                >
                                                    -
                                                </Button>
                                                {product.quantity}
                                                <Button
                                                    className="w-[40px]"
                                                    onClick={() => {
                                                        dispatch(
                                                            incrementQuantity(
                                                                product._id
                                                            )
                                                        )
                                                    }}
                                                >
                                                    +
                                                </Button>
                                            </td>
                                            <td className="col-span-2 text-center">
                                                {formatMoney(
                                                    product.price *
                                                        product.quantity
                                                )}
                                            </td>
                                            <td className="col-span-1 grid place-items-center">
                                                <Button
                                                    variant={'destructive'}
                                                    onClick={() => {
                                                        handleDeleteCart(
                                                            product._id
                                                        )
                                                    }}
                                                >
                                                    <FiDelete size={20} />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            }
                        </table>
                    )}
                </div>
                <div className="mt-6 flex justify-end">
                    <Button
                        asChild
                        className="w-[218px] h-[56px]"
                        variant={'outline'}
                    >
                        <Link to={'/products'}>Tiếp tục mua sắm</Link>
                    </Button>
                </div>
                <div className="mt-20 flex items-start justify-between">
                    <div className="flex items-center justify-start gap-4">
                        <Input
                            className="w-[400px] h-[56px] text-base px-5"
                            placeholder="Mã giảm giá"
                        />
                        <Button className="w-[211px] h-[56px]">Áp dụng</Button>
                    </div>
                    <div className="w-[470px] border-[1px] rounded-sm py-8 px-6">
                        <p className="text-[20px] leading-[28px] font-medium">
                            Hóa đơn
                        </p>
                        <div className="mt-6 flex items-center justify-between pb-4 border-b-[1px]">
                            <p>Tạm tính:</p>
                            <p>{formatMoney(total)}</p>
                        </div>
                        <div className="mt-6 flex items-center justify-between pb-4 border-b-[1px]">
                            <p>Phí vận chuyển:</p>
                            <p>{formatMoney(Shipping)}</p>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <p>Tổng cộng:</p>
                            <p>{formatMoney(total + Shipping)}</p>
                        </div>
                        <div className="mt-6 grid place-items-center">
                            <Button className="w-[260px] h-[56px]">
                                Tiến hành thanh toán
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cart
