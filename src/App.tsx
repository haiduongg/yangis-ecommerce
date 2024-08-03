import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ScrollToTop from '@/components/ScrollToTop'
import DefaultLayout from '@/layouts/DefaultLayout'
import globalRoutes from '@/routes/globalRoutes'

export default function App() {
    const routes = globalRoutes

    return (
        <React.Fragment>
            <ScrollToTop />
            <Routes>
                {routes.map((route) => {
                    const Layout = route.layout ?? DefaultLayout
                    const Page = route.element
                    const Path = route.path

                    return (
                        <Route
                            key={route.id}
                            path={Path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    )
                })}
            </Routes>
        </React.Fragment>
    )
}
