import * as React from 'react'

import { Link, useLocation, useParams } from 'react-router-dom'

import { useAuthContext } from '@/context/AuthContext'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import adminRoutes from '@/routes/adminRoutes'
import globalRoutes, { TRoute } from '@/routes/globalRoutes'

function Breadcrumbs() {
    const location = useLocation().pathname
    const params = useParams()

    const { authUser } = useAuthContext()
    const [routes, setRoutes] = React.useState<TRoute[]>(globalRoutes)

    React.useLayoutEffect(() => {
        if (!authUser.role) {
            setRoutes(globalRoutes)
        } else {
            if (authUser.role === 'admin') {
                setRoutes([...globalRoutes, ...adminRoutes])
            }
        }
    }, [authUser])

    let paths: string = location
    Object.keys(params).forEach((key) => {
        if (params[key] && location.includes(params[key])) {
            paths = location.replace(params[key], `:${key}`)
        }
    })

    const crumbs: TRoute[] = routes.filter((route) =>
        paths.includes(route.path)
    )

    return (
        <React.Fragment>
            <Breadcrumb>
                <BreadcrumbList>
                    {crumbs.map((item, index) => {
                        const isCurrentPage =
                            index + 1 === crumbs.length ? true : false

                        return (
                            <div
                                key={index}
                                className="flex items-center gap-1.25 sm:gap-2.5"
                            >
                                <BreadcrumbItem>
                                    {isCurrentPage == false && (
                                        <BreadcrumbLink asChild>
                                            <Link to={item.path}>
                                                {item.handle?.crumb()}
                                            </Link>
                                        </BreadcrumbLink>
                                    )}
                                    {isCurrentPage == true && (
                                        <BreadcrumbPage>
                                            {item.handle?.crumb()}
                                        </BreadcrumbPage>
                                    )}
                                </BreadcrumbItem>
                                {isCurrentPage == false && (
                                    <BreadcrumbSeparator />
                                )}
                            </div>
                        )
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </React.Fragment>
    )
}

export default Breadcrumbs
