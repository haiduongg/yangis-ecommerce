import { GoDotFill } from 'react-icons/go'
import { Link } from 'react-router-dom'

export default function TopHeader() {
    return (
        <div className="bg-white text-black py-1">
            <div className="container mx-auto flex items-center justify-between gap-4">
                <Link
                    to={'/shop'}
                    className="text-[14px] leading-[32px] font-semibold"
                >
                    MacBook tặng Đặc quyền Bảo hành 2 năm
                </Link>
                <GoDotFill size={10} />
                <Link
                    to={'/shop'}
                    className="text-[14px] leading-[32px] font-semibold"
                >
                    MacBook tặng Đặc quyền Bảo hành 2 năm
                </Link>
                <GoDotFill size={10} />
                <Link
                    to={'/shop'}
                    className="text-[14px] leading-[32px] font-semibold"
                >
                    MacBook tặng Đặc quyền Bảo hành 2 năm
                </Link>
                <GoDotFill size={10} />
                <Link
                    to={'/shop'}
                    className="text-[14px] leading-[32px] font-semibold"
                >
                    MacBook tặng Đặc quyền Bảo hành 2 năm
                </Link>
            </div>
        </div>
    )
}
