import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Breadcrumbs from '@/components/Breadcrumbs'
import BillingDetailForm from '@/features/Permissions/Member/components/BillingDetailForm'
import PaymentMethod from '@/features/Permissions/Member/components/PaymentMethod'

function Checkout() {
    const breadcrumbs = [
        { id: 1, path: '/account', label: 'Account' },
        { id: 2, path: '/', label: 'My Account' },
        { id: 3, path: '/', label: 'Product' },
        { id: 4, path: '/', label: 'View Cart' },
        { id: 5, path: '/', label: 'CheckOut' },
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
            <div className="mt-20">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <div className="mt-20">
                    <h2 className="text-[36px] leading-[30px] font-inter font-medium tracking-[4%]">
                        Billing Details
                    </h2>
                    <div className="flex items-start justify-between mt-12">
                        <div className="w-[500px]">
                            <BillingDetailForm />
                        </div>
                        <div className="w-[550px] mt-8">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="w-[90%] flex items-center justify-between mb-8"
                                >
                                    <div className="flex items-center">
                                        <img
                                            src={product.featureImage}
                                            alt={product.name}
                                            className="size-[54px]"
                                        />
                                        <p className="ml-6">{product.name}</p>

                                        {product.quantity > 1 && (
                                            <p className="ml-3 font-medium">
                                                x{product.quantity}
                                            </p>
                                        )}
                                    </div>
                                    <p>${product.price}</p>
                                </div>
                            ))}
                            <div className="mb-8 w-[90%]">
                                <div className="flex items-center justify-between pb-4 border-b-[1px]">
                                    <p>Subtotal:</p>
                                    <p>$1150</p>
                                </div>
                                <div className="flex items-center justify-between py-4 border-b-[1px]">
                                    <p>Shipping:</p>
                                    <p>Free</p>
                                </div>
                                <div className="flex items-center justify-between pt-4">
                                    <p>Total:</p>
                                    <p>$1150</p>
                                </div>
                            </div>
                            <div className="mb-8 w-[90%]">
                                <PaymentMethod />
                            </div>
                            <div className="flex items-center justify-between my-8">
                                <Input
                                    placeholder="Coupon Code"
                                    className="w-[300px] h-[56px]"
                                />
                                <Button className="w-[211px] h-[56px]">
                                    Apply Coupon
                                </Button>
                            </div>
                            <Button className="w-[190px] h-[56px]">
                                Place Order
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Checkout
