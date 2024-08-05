import { useSelector } from 'react-redux'

import Breadcrumbs from '@/components/Breadcrumbs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import BillingDetailForm from '@/features/Permissions/Member/components/BillingDetailForm'
import PaymentMethod from '@/features/Permissions/Member/components/PaymentMethod'
import { RootState } from '@/redux/store'
import { formatMoney } from '../../../../utils/numberServices'

const breadcrumbs = [
    { id: 1, path: '/account', label: 'Account' },
    { id: 2, path: '/', label: 'My Account' },
    { id: 3, path: '/', label: 'Product' },
    { id: 4, path: '/', label: 'View Cart' },
    { id: 5, path: '/', label: 'CheckOut' },
]

function Checkout() {
    const { cart } = useSelector((state: RootState) => state.cart)
    return (
        <div className="container mx-auto">
            <div className="my-4">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
            <h1 className="text-3xl font-bold mb-8">Thanh toán</h1>
            <div>
                <div className="flex items-start justify-between mt-12">
                    <div className="w-[500px]">
                        <BillingDetailForm />
                    </div>
                    <div className="w-[550px] mt-8">
                        {cart.map((product) => (
                            <div
                                key={product._id}
                                className="w-[90%] flex items-center justify-between mb-8"
                            >
                                <div className="flex items-center">
                                    <img
                                        src={product.thumbnail}
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
                                <p>{formatMoney(product.price * product.quantity)}</p>
                            </div>
                        ))}
                        <div className="mb-8 w-[90%]">
                            <div className="flex items-center justify-between pb-4 border-b-[1px]">
                                <p>Tạm tính:</p>
                                <p>$1150</p>
                            </div>
                            <div className="flex items-center justify-between py-4 border-b-[1px]">
                                <p>Phí vận chuyển:</p>
                                <p>Free</p>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <p>Tổng cộng:</p>
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
                            Đặt hàng
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
