import React from 'react'
import TopHeader from './TopHeader'
import Navbar from './Navbar'

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
