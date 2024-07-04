import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'

DefaultLayout.propTypes = {
    children: PropTypes.node,
}

function DefaultLayout({ children }: { children: ReactNode }) {
    return (
        <React.Fragment>
            <header>
                <Header />
            </header>
            <main className="container mx-auto">{children}</main>
        </React.Fragment>
    )
}

export default DefaultLayout
