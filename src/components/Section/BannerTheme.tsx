import DeskImage from '@/assets/images/desk_header_beeb2af002.png'
import BannerCarousel from '@/components/BannerCarousel'

function BannerTheme() {
    return (
        <div className="w-full bg-[url('@/assets/images/background.png')] h-[750px]">
            <div className="relative container top-[24px]">
                <img src={DeskImage} alt="DeskImage" />
                <div className="container mx-auto mt-[85px]">
                    <BannerCarousel />
                </div>
            </div>
        </div>
    )
}

export default BannerTheme
