import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import { IoFilter } from 'react-icons/io5'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import ICategory from '@/types/category'
import IProducer from '@/types/producer'

interface IProps {
    producers: IProducer[]
    categories: ICategory[]
    filter: {
        category: string
        producer: string
        price: string
    }
    setFilter: React.Dispatch<
        React.SetStateAction<{
            category: string
            producer: string
            price: string
        }>
    >
}

const radioPrice = [
    { id: '1', value: 'all', label: 'Tất cả' },
    { id: '2', value: 'duoi-5-trieu', label: 'Dưới 5 triệu' },
    {
        id: '3',
        value: 'tu-5-trieu-den-10-trieu',
        label: 'Từ 5 triệu - 10 triệu',
    },
    { id: '4', value: 'tren-10-trieu', label: 'Trên 10 triệu' },
]

function FilterBar({ producers, categories, filter, setFilter }: IProps) {
    const [collapse, setCollapse] = useState<{
        category: boolean
        producer: boolean
        price: boolean
    }>({
        category: false,
        producer: false,
        price: false,
    })

    return (
        <React.Fragment>
            <div className="col-span-1 border rounded-xl divide-y h-fit select-none">
                <h2 className="text-lg px-5 py-4 font-semibold leading-none">
                    <IoFilter
                        className="inline-block mr-3 leading-none align-middle"
                        size={23}
                    />
                    Bộ lọc tìm kiếm
                </h2>

                <div className="px-5 py-4">
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => {
                            setCollapse((pre) => ({
                                ...pre,
                                category: !collapse.category,
                            }))
                        }}
                    >
                        <h3 className="text-base leading-none font-semibold">
                            Danh mục
                        </h3>
                        <FaChevronDown
                            className={`${
                                collapse.category == true ? '' : 'rotate-90'
                            } transition duration-200`}
                        />
                    </div>
                    <div
                        className={`${
                            collapse.category == true ? '' : 'hidden'
                        } mt-5 grid grid-cols-2 gap-3`}
                    >
                        {categories.map((category) => (
                            <Button
                                key={category._id}
                                variant={
                                    filter.category === category.name
                                        ? 'default'
                                        : 'outline'
                                }
                                onClick={() => {
                                    setFilter((pre) => ({
                                        ...pre,
                                        category: category.name,
                                    }))
                                }}
                            >
                                {category.name}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="px-5 py-4">
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => {
                            setCollapse((pre) => ({
                                ...pre,
                                producer: !collapse.producer,
                            }))
                        }}
                    >
                        <h3 className="text-base leading-none font-semibold">
                            Hãng sản xuất
                        </h3>
                        <FaChevronDown
                            className={`${
                                collapse.producer == true ? '' : 'rotate-90'
                            } transition duration-200`}
                        />
                    </div>
                    <div
                        className={`${
                            collapse.producer == true ? '' : 'hidden'
                        } mt-5 grid grid-cols-2 gap-3`}
                    >
                        {producers.map((producer) => (
                            <Button
                                key={producer._id}
                                variant={
                                    filter.producer === producer.name
                                        ? 'default'
                                        : 'outline'
                                }
                                onClick={() => {
                                    setFilter((pre) => ({
                                        ...pre,
                                        producer: producer.name,
                                    }))
                                }}
                            >
                                {producer.name}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="px-5 py-4">
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => {
                            setCollapse((pre) => ({
                                ...pre,
                                price: !collapse.price,
                            }))
                        }}
                    >
                        <h3 className="text-base leading-none font-semibold">
                            Mức giá
                        </h3>
                        <FaChevronDown
                            className={`${
                                collapse.price == true ? '' : 'rotate-90'
                            } transition duration-200`}
                        />
                    </div>
                    <div
                        className={`${
                            collapse.price == true ? '' : 'hidden'
                        } mt-5`}
                    >
                        <RadioGroup
                            defaultValue={radioPrice[0].value}
                            className="space-y-2"
                        >
                            {radioPrice.map((item) => (
                                <div
                                    className="flex items-center space-x-2"
                                    onClick={() => {
                                        setFilter((pre) => ({
                                            ...pre,
                                            price: item.value,
                                        }))
                                    }}
                                    key={item.id}
                                >
                                    <RadioGroupItem
                                        value={item.value}
                                        id={item.id}
                                    />
                                    <Label
                                        htmlFor={item.id}
                                        className="cursor-pointer"
                                    >
                                        {item.label}
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FilterBar
