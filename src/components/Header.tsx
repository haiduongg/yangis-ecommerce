import React from 'react'

import Navbar from '@/components/Navbar'
import TopHeader from '@/components/TopHeader'

function Header() {
    return (
        <React.Fragment>
            <TopHeader />
            <div className="container mt-[40px] pb-4 border-b-[1px] border-neutral-100">
                <Navbar />
            </div>
        </React.Fragment>
    )
}

export default Header
