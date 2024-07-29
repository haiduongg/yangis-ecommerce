import { IconType } from 'react-icons'
import {
    IoPhonePortraitOutline,
    IoWatchOutline,
    IoCameraOutline,
    IoGameControllerOutline,
} from 'react-icons/io5'
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import { RiHeadphoneLine } from 'react-icons/ri'

interface ICategories {
    id: string
    icon: IconType
    label: string
}

const categories: ICategories[] = [
    {
        id: '1',
        icon: IoPhonePortraitOutline,
        label: 'Điện thoại',
    },
    {
        id: '2',
        icon: HiOutlineComputerDesktop,
        label: 'Máy tính',
    },
    {
        id: '3',
        icon: IoWatchOutline,
        label: 'Đồng hồ',
    },
    {
        id: '4',
        icon: IoCameraOutline,
        label: 'Camera',
    },
    {
        id: '5',
        icon: RiHeadphoneLine,
        label: 'Tai nghe',
    },
    {
        id: '6',
        icon: IoGameControllerOutline,
        label: 'Gaming',
    },
]

export default categories
