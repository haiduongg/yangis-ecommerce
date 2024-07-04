import BannerImage from '@/assets/images/banner.png'

function Banner() {
    return (
        <div className="w-[996px] h-[385px]">
            <img
                src={BannerImage}
                alt="Banner"
                width={996}
                height={385}
                className="w-full h-full object-cover"
            />
        </div>
    )
}

export default Banner
