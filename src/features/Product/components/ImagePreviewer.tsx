import PropTypes from 'prop-types'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'

ImagePreviewer.propTypes = {
    data: PropTypes.string.isRequired,
}

function ImagePreviewer({ data }: { data: string[] }) {
    const [watching, setWatching] = useState<number>(0)
    const handleBtn = (action: string) => {
        if (action === 'next') {
            if (watching === data.length - 1) {
                setWatching(0)
            } else setWatching(watching + 1)
        }
        if (action === 'previous') {
            if (watching === 0) {
                setWatching(data.length - 1)
            } else setWatching(watching - 1)
        }
    }

    return (
        <div className="flex items-start justify-between h-[597px]">
            <div className="w-[100px] h-full">
                <div className="flex flex-col items-center justify-between h-full">
                    <Button
                        onClick={() => {
                            handleBtn('previous')
                        }}
                    >
                        <FaChevronUp />
                    </Button>
                    <div className="pt-[163px] flex flex-col items-center justify-center gap-3 h-[430px] overflow-y-scroll no-scrollbar">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={`${
                                    watching == index
                                        ? 'border-black p-1'
                                        : 'border-transparent p-1'
                                } border-[2px] row-span-1 cursor-pointer h-[84px] w-[100px]`}
                                onClick={() => {
                                    setWatching(index)
                                }}
                            >
                                <img
                                    src={item}
                                    alt="index"
                                    className="w-full h-full object-cover rounded-sm"
                                />
                            </div>
                        ))}
                    </div>
                    <Button
                        onClick={() => {
                            handleBtn('next')
                        }}
                    >
                        <FaChevronDown />
                    </Button>
                </div>
            </div>
            <div className="w-[calc(100%-120px)] h-full">
                <img
                    src={data[watching]}
                    alt="image"
                    className="w-full h-full object-cover rounded-sm"
                />
            </div>
        </div>
    )
}

export default ImagePreviewer
