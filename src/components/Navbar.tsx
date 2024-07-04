import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { GrSearch, GrCart } from 'react-icons/gr'
import { FaRegHeart } from 'react-icons/fa6'
import { GoArrowUpRight } from 'react-icons/go'
import navigates from '@/constants/navigates'

export default function Navbar() {
    return (
        <React.Fragment>
            <div className="flex items-center justify-between">
                <Link to={'/'} className="text-4xl leading-none font-bold">
                    Yangis
                </Link>

                <nav>
                    <ul className="flex items-center justify-start gap-12">
                        {navigates.map((navigate) => (
                            <li key={navigate.id}>
                                <NavLink
                                    to={navigate.path}
                                    target={navigate.isDirection ? '_' : ''}
                                    className={({
                                        isActive,
                                    }: {
                                        isActive: boolean
                                    }) =>
                                        isActive
                                            ? 'active relative'
                                            : 'nav-link relative'
                                    }
                                >
                                    <div>
                                        {navigate.label}
                                        {navigate.isDirection && (
                                            <GoArrowUpRight
                                                className="absolute top-[2px] right-[-17px]"
                                                size={12}
                                            />
                                        )}
                                    </div>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center justify-end gap-6">
                    <div className="relative w-[243px] h-[38px]">
                        <Input
                            placeholder="What are you looking for?"
                            className="placeholder:text-xs placeholder:leading-[18px] bg-neutral-100 border-none"
                        />
                        <GrSearch
                            className="absolute top-[9px] right-3 cursor-pointer"
                            size={20}
                        />
                    </div>
                    <div className="flex items-center justify-end gap-4">
                        <Link
                            to={'/wish-list'}
                            className="p-[6px] cursor-pointer"
                        >
                            <FaRegHeart size={20} />
                        </Link>
                        <Link to={'/cart'} className="p-[6px] cursor-pointer">
                            <GrCart size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
