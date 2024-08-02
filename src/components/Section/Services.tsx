import React from 'react'

import services from '@/constants/services'

function Services() {
    return (
        <React.Fragment>
            <div className="mx-auto w-[943px] h-[161px] flex items-center justify-between gap-[88px]">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-6"
                    >
                        <img src={service.icon} alt={service.title} />
                        <div className="text-center">
                            <p className="text-[20px] leading-[28px] font-semibold">
                                {service.title}
                            </p>
                            <p className="mt-2 text-sm leading-[21px]">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default Services
