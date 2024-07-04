import React from 'react'
import { Link } from 'react-router-dom'
import navigates from '@/constants/navigates'

export default function Navbar() {
    return (
        <React.Fragment>
            <div className="flex items-center justify-between">
                <Link to={'/'} className="text-xl leading-none font-bold">
                    Yangis
                </Link>

                <nav>
                    <ul className="flex items-center justify-start gap-12">
                        {navigates.map((navigate) => (
                            <li key={navigate.id}>
                                <Link
                                    to={navigate.path}
                                    className="text-base underline underline-offset-4"
                                >
                                    {navigate.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <div className="w-[243px] h-[38px]"></div>
                </div>
            </div>
        </React.Fragment>
    )
}
