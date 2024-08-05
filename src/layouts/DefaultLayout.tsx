import { ReactNode } from 'react'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TopHeader from '@/components/TopHeader'
import PropTypes from 'prop-types'

DefaultLayout.propTypes = {
    children: PropTypes.node,
}

function DefaultLayout({ children }: { children: ReactNode }) {
    return (
        <div
            id="page"
            className="bg-wallground-light dark:bg-wallground-dark text-black dark:text-white "
        >
            <header>
                <Navbar />
                <TopHeader />
            </header>
            <main className="mb-[140px]">{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default DefaultLayout
