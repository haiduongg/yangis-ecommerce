import React from 'react'
import { Button } from '@/components/ui/button'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Link } from 'react-router-dom'

function Error() {
    const breadcrumbs = [
        { id: 1, path: '/', label: 'Home' },
        { id: 2, path: '/', label: '404 Error' },
    ]
    return (
        <React.Fragment>
            <div className="mt-20">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <div className="mt-[140px] text-center w-full">
                    <h1 className="text-[110px] leading-[115px] font-inter tracking-[3%] font-meidum">
                        404 Not Found
                    </h1>
                    <p className="mt-10">
                        Your visited page not found. You may go home page.
                    </p>
                    <Button
                        asChild
                        className="w-[254px] h-[56px] mx-auto mt-20"
                    >
                        <Link to={'/'}>Back to home page</Link>
                    </Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Error
