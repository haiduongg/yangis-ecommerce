import React from 'react'
import { Link } from 'react-router-dom'

import QR from '@/assets/images/QR.png'
import { Input } from '@/components/ui/input'
import footerLinks from '@/constants/footerLinks'

function Footer() {
    return (
        <React.Fragment>
            <div className="bg-black text-white">
                <div className="container grid grid-cols-12 gap-10 pt-[80px] pb-[60px] border-b-[1px] border-neutral-700">
                    <div className="col-span-3">
                        <Link
                            to={'/'}
                            className="text-[24px] leading-none tracking-[3%] font-inter font-bold"
                        >
                            Yangis
                        </Link>
                        <p className="mt-6 text-[20px] leading-[28px] font-medium">
                            Subscribe
                        </p>
                        <p className="mt-6 text-base">
                            Get 10% off your first order
                        </p>
                        <div className="mt-4 text-black">
                            <Input placeholder="Enter your email" />
                        </div>
                    </div>
                    {footerLinks.map((group, index) => (
                        <div key={index} className="col-span-2">
                            <p className="text-[20px] leading-[28px] font-medium">
                                {group.title}
                            </p>
                            <ul className="mt-6">
                                {group.links.map((link, index) => (
                                    <li key={index} className="mt-4">
                                        <Link
                                            to={link.path}
                                            className="text-base hover:underline underline-offset-4 opacity-60 hover:opacity-100 transition duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="col-span-3">
                        <p className="text-[20px] leading-[28px] font-medium">
                            Download App
                        </p>
                        <p className="mt-6 mb-2 text-xs leading-[18px] opacity-70">
                            Save $3 with App New User Only
                        </p>
                        <img src={QR} alt="QR" />
                    </div>
                </div>
                <div className="pt-4 pb-6 text-center">
                    <p className="text-base">
                        <span className="opacity-60">&copy; Copyright </span>
                        <Link
                            to={'https://www.facebook.com/hyang.309'}
                            className="opacity-80 hover:underline font-semibold underline-offset-4"
                            target="_"
                        >
                            Hai Yang
                        </Link>{' '}
                        <span className="opacity-60">
                            2024. All right reserved
                        </span>
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer
