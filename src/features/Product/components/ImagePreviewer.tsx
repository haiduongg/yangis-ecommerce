import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

import { Button } from '@/components/ui/button'
import { IImagePreviewOptions } from '@/features/Product/utils/productDetailServices'

interface IProps {
    imagePreviewOptions: IImagePreviewOptions[]
    selectionColor: string
}

function ImagePreviewer({ imagePreviewOptions, selectionColor }: IProps) {
    const [watching, setWatching] = useState<number>(0)
    const [imageState, setImageState] = useState<IImagePreviewOptions>(
        imagePreviewOptions[0]
    )

    useEffect(() => {
        const handleChangeImageState = () => {
            // Get one item in first filter
            const getImageStateWithSelectionColor: IImagePreviewOptions =
                imagePreviewOptions.filter(
                    (item) => item.label === selectionColor
                )[0]
            setImageState(getImageStateWithSelectionColor)
        }
        handleChangeImageState()
    }, [selectionColor, imagePreviewOptions])

    const handleBtn = (action: string) => {
        if (action === 'next') {
            if (watching === imageState.imageData.length - 1) {
                setWatching(0)
            } else setWatching(watching + 1)
        }
        if (action === 'previous') {
            if (watching === 0) {
                setWatching(imageState.imageData.length - 1)
            } else setWatching(watching - 1)
        }
    }

    return (
        <div className="h-[597px]">
            {/* Viewing */}
            <div className="relative flex items-center justify-center h-[497px] rounded-md">
                <Button
                    onClick={() => {
                        handleBtn('previous')
                    }}
                    className="absolute left-0"
                >
                    <FaChevronLeft />
                </Button>
                <Button
                    onClick={() => {
                        handleBtn('next')
                    }}
                    className="absolute right-0"
                >
                    <FaChevronRight />
                </Button>
                {/* Image was viewing */}
                <img
                    src={imageState.imageData[watching]}
                    alt="image"
                    className="max-w-full h-full object-contain"
                />
            </div>

            {/* Preview list */}
            <div className="mt-[12px] h-[100px]">
                <div className="flex items-start justify-center gap-3 overflow-y-scroll no-scrollbar">
                    {imagePreviewOptions.map((item) => (
                        <div
                            key={item.id}
                            className="row-span-1 cursor-pointer"
                            onClick={() => {
                                setImageState(item)
                                setWatching(0)
                            }}
                        >
                            <div
                                className={`${
                                    imageState.label == item.label
                                        ? 'border-red-500'
                                        : 'border-gray-300'
                                } border-[1px] w-[57px]`}
                            >
                                {item.icon && (
                                    <div className="size-[55px] grid place-items-center">
                                        <item.icon size={25} />
                                    </div>
                                )}
                                {!item.icon && (
                                    <img
                                        src={item.imageData[0]}
                                        alt="index"
                                        className="size-[55px] object-cover rounded-sm"
                                    />
                                )}
                            </div>
                            <p className="max-w-[95%] text-xs leading-none text-center mt-[5px]">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImagePreviewer
