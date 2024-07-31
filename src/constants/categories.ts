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
    _id: string
    icon: IconType
    name: string
}

const categories: ICategories[] = [
    {
        _id: '1',
        icon: IoPhonePortraitOutline,
        name: 'Điện thoại',
    },
    {
        _id: '2',
        icon: HiOutlineComputerDesktop,
        name: 'Máy tính',
    },
    {
        _id: '3',
        icon: IoWatchOutline,
        name: 'Đồng hồ',
    },
    {
        _id: '4',
        icon: IoCameraOutline,
        name: 'Camera',
    },
    {
        _id: '5',
        icon: RiHeadphoneLine,
        name: 'Tai nghe',
    },
    {
        _id: '6',
        icon: IoGameControllerOutline,
        name: 'Gaming',
    },
]

export default categories
