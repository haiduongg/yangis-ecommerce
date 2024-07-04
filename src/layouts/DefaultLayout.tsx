import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'

DefaultLayout.propTypes = {
    children: PropTypes.node,
}

function DefaultLayout({ children }: { children: ReactNode }) {
    return (
        <React.Fragment>
            <header>
                <Header />
            </header>
            <main className="container mx-auto mb-[140px]">{children}</main>
            <footer>
                <Footer />
            </footer>
        </React.Fragment>
    )
}

export default DefaultLayout
