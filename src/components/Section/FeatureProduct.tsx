import React from 'react'

import ShadowStyle from '@/assets/images/shadown.png'
import { Button } from '@/components/ui/button'

function FeatureProduct() {
    const ProductSale: { label: string; value: string }[] = [
        {
            label: 'Hours',
            value: '23',
        },
        {
            label: 'Days',
            value: '05',
        },
        {
            label: 'Minutes',
            value: '59',
        },
        {
            label: 'Seconds',
            value: '35',
        },
    ]
    return (
        <React.Fragment>
            <div className="relative bg-black w-full h-[500px] pt-[69px] pl-[56px]">
                <img
                    src={ShadowStyle}
                    alt="img"
                    className="absolute top-[37px] right-[50px] z-10"
                />
                <div className="absolute size-[400px] bg-[#D9D9D9] top-[37px] right-[160px] blur-[200px] opacity-80" />
                <p className="text-[#00FF66] text-base leading-[20px] font-semibold">
                    Categories
                </p>
                <p className="max-w-[443px] mt-[32px] text-[48px] leading-[60px] font-semibold tracking-[4%] text-white">
                    Enhance Your Music Experience
                </p>
                <div className="mt-[32px] flex items-center justify-start gap-6">
                    {ProductSale.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center bg-white rounded-full size-[62px]"
                        >
                            <p className="text-base leading-[20px] font-semibold">
                                {item.value}
                            </p>
                            <p className="text-[11px] leading-[18px]">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-[40px]">
                    <Button className="w-[171px] h-[56px] text-base bg-[#00FF66]">
                        Buy Now
                    </Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FeatureProduct
