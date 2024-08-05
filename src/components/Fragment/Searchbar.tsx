import { useState } from 'react'
import { IoCloseCircle, IoSearch } from 'react-icons/io5'
import { useSearchParams } from 'react-router-dom'

import { useOutsideClick } from '@/hooks/useOutsideClick'
import { motion } from 'framer-motion'

interface IProps {
    isExtendSearchbar: boolean
    setIsExtendSearchbar: React.Dispatch<React.SetStateAction<boolean>>
}

function Searchbar({ isExtendSearchbar, setIsExtendSearchbar }: IProps) {
    const [, setSearchParams] = useSearchParams()
    const [searchKey, setSearchKey] = useState<string>('')

    const handleSearch = () => {
        if (searchKey) {
            setSearchParams({ search: searchKey })
        }
    }

    const ref = useOutsideClick(() => {
        setIsExtendSearchbar(false)
        setSearchKey('')
    })

    // Motion variants
    const searchbar = {
        narrow: { opacity: 1, width: '44px' },
        extend: { opacity: 1, width: '680px' },
    }
    const input = {
        narrow: { display: 'none', width: 0 },
        extend: { display: 'block', width: '100%', paddingLeft: '10px' },
    }

    return (
        <div className="flex items-center justify-end">
            <motion.div
                initial={searchbar.narrow}
                animate={isExtendSearchbar ? 'extend' : 'narrow'}
                variants={searchbar}
                className={`relative p-[6px] text-black flex items-center justify-end bg-white rounded-full`}
                ref={ref}
            >
                <motion.input
                    initial={input.narrow}
                    animate={isExtendSearchbar ? 'extend' : 'narrow'}
                    variants={input}
                    type="text"
                    className="text-[14px] focus:outline-none leading-[32px]"
                    placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm"
                    autoComplete="off"
                    name="search"
                    value={searchKey}
                    onChange={(e) => {
                        setSearchKey(e.target.value)
                    }}
                />
                {searchKey && (
                    <button
                        className="mr-3 hover:scale-125 transition duration-200"
                        title="Đóng"
                        onClick={() => {
                            setSearchKey('')
                        }}
                    >
                        <IoCloseCircle size={20} />
                    </button>
                )}
                <button
                    className={`size-[32px] rounded-full grid place-items-center text-[#dc2626] transition duration-300`}
                    title="Tìm kiếm"
                    onClick={() => {
                        if (isExtendSearchbar === false) {
                            setIsExtendSearchbar(true)
                        } else {
                            handleSearch()
                        }
                    }}
                >
                    <IoSearch size={20} />
                </button>
            </motion.div>
        </div>
    )
}

export default Searchbar
