import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DefaultLayout from '@/layouts/DefaultLayout'
import globalRoutes from '@/routes/globalRoutes'
import ScrollToTop from '@/components/ScrollToTop'

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
