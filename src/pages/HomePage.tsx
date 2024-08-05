import React from 'react'
import { Helmet } from 'react-helmet-async'

import {
    BannerTheme,
    BestSelling,
    Categories,
    FeatureProduct,
    FlashSales,
    NewestPost,
    OurProduct,
    Services,
} from '@/components/Section/index'

function HomePage() {
    return (
        <React.Fragment>
            <Helmet>
                <title>Yangis | Điện thoại, laptop, phụ kiện giá rẻ, ...</title>
            </Helmet>

            <div className="flex items-center justify-between">
                <BannerTheme />
            </div>
            <div className="container pb-[60px] border-b-[1px] border-neutral-100">
                <FlashSales />
            </div>
            <div className="container mt-20 pb-[70px] border-b-[1px] border-neutral-100">
                <Categories />
            </div>
            <div className="container mt-[70px]">
                <BestSelling />
            </div>
            <div className="container mt-[140px]">
                <FeatureProduct />
            </div>
            <div className="container mt-[70px]">
                <OurProduct />
            </div>
            <div className="container mt-[140px]">
                <NewestPost />
            </div>
            <div className="container my-[140px]">
                <Services />
            </div>
        </React.Fragment>
    )
}

export default HomePage
