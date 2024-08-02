import { IconType } from 'react-icons'
import { HiMiniSparkles } from 'react-icons/hi2'

import IProduct from '@/types/product'

export interface IImagePreviewOptions {
    id: number
    label: string
    icon?: IconType
    imageData: string[]
}

const exportImagePreviewHandler: (
    product: IProduct
) => IImagePreviewOptions[] = (product) => {
    const result = []
    if (product.featureImage) {
        result.push({
            id: result.length,
            label: 'Ảnh nổi bật',
            icon: HiMiniSparkles,
            imageData: product.featureImage,
        })
    }

    if (product.selection?.color) {
        product.selection.color.forEach((item) => {
            result.push({
                id: result.length,
                label: item.label,
                imageData: item.images,
            })
        })
    }

    return result
}

export { exportImagePreviewHandler }
