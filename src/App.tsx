import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout';
import globalRoutes from './routes/globalRoutes'

export default function App() {
    const routes = globalRoutes;

    return (
        <React.Fragment>
            <Routes>
                {routes.map((route) => {
                    const Layout = route.layout ?? DefaultLayout;
                    const Page = route.component;   
                    const Path = route.path;

                    return <Route key={route.id} path={Path} element={<Layout><Page/></Layout>}/>
                })}
            </Routes>
        </React.Fragment>
    )
}
