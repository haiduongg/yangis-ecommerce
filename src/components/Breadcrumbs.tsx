import React from 'react'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

interface IProps {
    breadcrumbs: { id: number; path: string; label: string }[]
}

function Breadcrumbs({ breadcrumbs }: IProps) {
    return (
        <React.Fragment>
            <Breadcrumb>
                <BreadcrumbList>
                    {breadcrumbs.map((item, index) => {
                        const isCurrentPage =
                            index + 1 === breadcrumbs.length ? true : false
                        return (
                            <div
                                key={item.id}
                                className="flex items-center gap-1.25 sm:gap-2.5"
                            >
                                <BreadcrumbItem>
                                    {isCurrentPage == false && (
                                        <BreadcrumbLink href="/">
                                            {item.label}
                                        </BreadcrumbLink>
                                    )}
                                    {isCurrentPage == true && (
                                        <BreadcrumbPage>
                                            {item.label}
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
