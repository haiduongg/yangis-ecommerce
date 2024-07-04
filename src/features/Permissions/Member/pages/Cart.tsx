import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { FiDelete } from 'react-icons/fi'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function Cart() {
    const breadcrumbs = [
        { id: 1, path: '/', label: 'Home' },
        { id: 2, path: '/', label: 'Cart' },
    ]
    const products = [
        {
            id: '1',
            name: 'HAVIT HV-G92 Gamepad',
            featureImage:
                'https://product.hstatic.net/200000420363/product/7bbab475d0ce8433910532073d73b686_ea0585d239d24736934edc8461a0d7ab_master.png',
            price: '200',
            rating: 4,
            discountPercent: 50,
            salePrice: '100',
            totalReview: 88,
            quantity: 1,
        },
        {
            id: '2',
            name: 'HAVIT HV-G92 Gamepad',
            featureImage:
                'https://product.hstatic.net/200000420363/product/7bbab475d0ce8433910532073d73b686_ea0585d239d24736934edc8461a0d7ab_master.png',
            price: '200',
            rating: 5,
            discountPercent: 50,
            totalReview: 8,
            quantity: 1,
        },
    ]
    return (
        <React.Fragment>
            <div className="mt-[80px]">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <div className="mt-[80px]">
                    <table className="w-full">
                        <thead className="grid grid-cols-12 shadow-xxl py-5">
                            <th className="col-span-4">Product</th>
                            <th className="col-span-2">Price</th>
                            <th className="col-span-3">Quantity</th>
                            <th className="col-span-2">Subtotal</th>
                            <th className="col-span-1">Action</th>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr
                                    key={product.id}
                                    className="grid grid-cols-12 py-5 mt-10 items-center"
                                >
                                    <td className="col-span-4 ml-10 flex items-center">
                                        <img
                                            src={product.featureImage}
                                            alt={product.name}
                                            className="size-[54px]"
                                        />
                                        <p className="ml-5">{product.name}</p>
                                    </td>
                                    <td className="col-span-2 text-center">
                                        <p>${product.price}</p>
                                    </td>
                                    <td className="col-span-3 text-center">
                                        Quantity
                                    </td>
                                    <td className="col-span-2 text-center">
                                        ${product.price}
                                    </td>
                                    <td className="col-span-1 grid place-items-center">
                                        <Button variant={'destructive'}>
                                            <FiDelete size={20} />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-6 flex justify-end">
                    <Button className="w-[218px] h-[56px]" variant={'outline'}>
                        Return To Shop
                    </Button>
                </div>
                <div className="mt-20 flex items-start justify-between">
                    <div className="flex items-center justify-start gap-4">
                        <Input
                            className="w-[400px] h-[56px] text-base px-5"
                            placeholder="Coupon Code"
                        />
                        <Button className="w-[211px] h-[56px]">
                            Apply Coupon
                        </Button>
                    </div>
                    <div className="w-[470px] border-[1px] rounded-sm py-8 px-6">
                        <p className="text-[20px] leading-[28px] font-medium">
                            Cart Total
                        </p>
                        <div className="mt-6 flex items-center justify-between pb-4 border-b-[1px]">
                            <p>Subtotal:</p>
                            <p>$1170</p>
                        </div>
                        <div className="mt-6 flex items-center justify-between pb-4 border-b-[1px]">
                            <p>Shipping:</p>
                            <p>Free</p>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <p>Total:</p>
                            <p>$1170</p>
                        </div>
                        <div className="mt-6 grid place-items-center">
                            <Button className="w-[260px] h-[56px]">
                                Process to checkout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Cart
