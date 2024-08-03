import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import {
    IoCameraOutline,
    IoGameControllerOutline,
    IoPhonePortraitOutline,
    IoWatchOutline,
} from 'react-icons/io5'
import { RiHeadphoneLine } from 'react-icons/ri'

import ICategory from '@/types/category'

const categories: ICategory[] = [
    {
        _id: '1',
        icon: IoPhonePortraitOutline,
        name: 'Điện thoại',
        createdAt: '123',
        updatedAt: '123',
    },
    {
        _id: '2',
        icon: HiOutlineComputerDesktop,
        name: 'Máy tính',
        createdAt: '123',
        updatedAt: '123',
    },
    {
        _id: '3',
        icon: IoWatchOutline,
        name: 'Đồng hồ',
        createdAt: '123',
        updatedAt: '123',
    },
    {
        _id: '4',
        icon: IoCameraOutline,
        name: 'Camera',
        createdAt: '123',
        updatedAt: '123',
    },
    {
        _id: '5',
        icon: RiHeadphoneLine,
        name: 'Tai nghe',
        createdAt: '123',
        updatedAt: '123',
    },
    {
        _id: '6',
        icon: IoGameControllerOutline,
        name: 'Gaming',
        createdAt: '123',
        updatedAt: '123',
    },
]

export default categories
