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
        label: 'Phones',
    },
    {
        id: '2',
        icon: HiOutlineComputerDesktop,
        label: 'Computers',
    },
    {
        id: '3',
        icon: IoWatchOutline,
        label: 'SmartWatch',
    },
    {
        id: '4',
        icon: IoCameraOutline,
        label: 'Camera',
    },
    {
        id: '5',
        icon: RiHeadphoneLine,
        label: 'HeadPhones',
    },
    {
        id: '6',
        icon: IoGameControllerOutline,
        label: 'Gaming',
    },
]

export default categories
