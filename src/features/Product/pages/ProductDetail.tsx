import React from 'react'
import products from '@/constants/products'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'
import PS51 from '@/assets/images/ps5_1.png'
import PS52 from '@/assets/images/ps5_2.png'
import PS53 from '@/assets/images/ps5_3.png'
import PS54 from '@/assets/images/ps5_4.png'
import PS55 from '@/assets/images/ps5_5.png'
import { Button } from '../../../components/ui/button'
import { FaRegHeart } from 'react-icons/fa6'

function ProductDetail() {
    const previews = [PS51, PS52, PS53, PS54]
    const breadcrumbs = [
        { id: 1, path: '/', label: 'Home' },
        { id: 2, path: '/products', label: 'Products' },
        { id: 2, path: '/products/product-name', label: 'Products Name' },
    ]
    return (
        <React.Fragment>
            <div className="mt-20">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
            <div className="mt-20 flex items-start justify-start gap-[70px]">
                <div className="w-[800px] grid grid-cols-4 gap-[30px]">
                    <div className="col-span-1 grid grid-rows-4 gap-y-4">
                        {previews.map((preview, index) => (
                            <div key={index} className="row-span-1">
                                <img
                                    src={preview}
                                    alt="index"
                                    className="w-[170px] h-[138px] object-cover rounded-sm"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="col-span-3">
                        <img
                            src={PS55}
                            alt=""
                            className="w-full h-[600px] object-cover rounded-sm"
                        />
                    </div>
                </div>
                <div className="w-[calc(100%-800px)]">
                    <p className="text-[24px] leading-[24px] tracking-[3%] font-inter font-semibold">
                        Havic HV G-92 Gamepad
                    </p>
                    <div className="mt-4">
                        <div className="flex items-center justify-start gap-2">
                            <div className="flex items-center justify-start">
                                {new Array(5).fill(0).map((index) => (
                                    <svg
                                        width="16"
                                        height="15"
                                        viewBox="0 0 16 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        key={index}
                                    >
                                        <path
                                            d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                                            fill="#FFAD33"
                                        />
                                    </svg>
                                ))}
                                {new Array(5 - 5).fill(0).map((index) => (
                                    <svg
                                        width="16"
                                        height="15"
                                        viewBox="0 0 16 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        key={index}
                                    >
                                        <path
                                            opacity="0.25"
                                            d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
                                            fill="black"
                                        />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-sm leading-[21px] font-semibold opacity-60">
                                ({55} Reviews)
                            </p>
                            <div className="w-[1px] h-[20px] bg-neutral-300 mx-2" />
                            <p className="text-[#00FF66] text-sm leading-[21px]">
                                In Stock
                            </p>
                        </div>
                    </div>
                    <p className="mt-4 text-[24px] leading-none font-inter tracking-[3%]">
                        $192.00
                    </p>
                    <div className="mt-6 pb-6 border-b-[1px]">
                        <p className="max-w-[500px] text-sm leading-[21px]">
                            PlayStation 5 Controller Skin High quality vinyl
                            with air channel adhesive for easy bubble free
                            install & mess free removal Pressure sensitive.
                        </p>
                    </div>
                    <div className="mt-6 flex items-center justify-start gap-6">
                        <p className="text-[20px] leading-none tracking-[3%] font-inter">
                            Colors:
                        </p>
                        <div className="flex items-center justify-start gap-2">
                            <div className="size-[20px] rounded-full bg-blue-300" />
                            <div className="size-[20px] rounded-full bg-red-300" />
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-start gap-6">
                        <p className="text-[20px] leading-none tracking-[3%] font-inter">
                            Size
                        </p>
                        <div className="flex items-center justify-start gap-4">
                            <Button className="size-[32px]" variant={'outline'}>
                                XS
                            </Button>
                            <Button className="size-[32px]" variant={'outline'}>
                                S
                            </Button>
                            <Button className="size-[32px]">M</Button>
                            <Button className="size-[32px]" variant={'outline'}>
                                L
                            </Button>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-start gap-4">
                        <Button className="w-[165px] h-[44px]">Buy Now</Button>
                        <Button
                            className="size-11 p-1 ml-3"
                            variant={'outline'}
                        >
                            <FaRegHeart size={20} />
                        </Button>
                    </div>
                    <div className="mt-10">
                        <div className="flex items-center justify-start gap-4 pt-6 pl-4 pb-4 border-[1px] border-b-transparent border-neutral-500 rounded-tr-md rounded-tl-md">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_261_4843)">
                                    <path
                                        d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M5 11.8182H11.6667"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M1.81836 15.4545H8.48503"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M5 19.0909H11.6667"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_261_4843">
                                        <rect
                                            width="40"
                                            height="40"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <div>
                                <p className="font-medium">Free Delivery</p>
                                <p className="underline font-medium underline-offset-2 mt-2">
                                    Enter your postal code for Delivery
                                    Availability
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-4 pt-6 pl-4 pb-4 border-[1px] border-neutral-500 rounded-bl-md rounded-br-md">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_261_4865)">
                                    <path
                                        d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_261_4865">
                                        <rect
                                            width="40"
                                            height="40"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>

                            <div>
                                <p className="font-medium">Return Delivery</p>
                                <p className="font-medium mt-2">
                                    Free 30 Days Delivery Returns.{' '}
                                    <span className="underline underline-offset-2">
                                        Details
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[140px]">
                <div className="flex items-center justify-start gap-4 mb-[13px]">
                    <svg
                        width="20"
                        height="40"
                        viewBox="0 0 20 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="20" height="40" rx="4" fill="#DB4444" />
                    </svg>
                    <p className="font-semibold text-base leading-[20px] text-[#DB4444]">
                        Related Item
                    </p>
                </div>
                <div className="mt-[60px] grid grid-cols-5 gap-x-8 gap-y-[60px]">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductDetail
