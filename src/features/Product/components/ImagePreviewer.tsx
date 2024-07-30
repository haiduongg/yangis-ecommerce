import PropTypes from 'prop-types'
import { useState } from 'react'

ImagePreviewer.propTypes = {
    data: PropTypes.string.isRequired,
}

function ImagePreviewer({ data }: { data: string[] }) {
    const [watching, setWatching] = useState<string>(data[0])

    return (
        <div className="w-[800px] grid grid-cols-4 gap-[30px]">
            <div className="col-span-1 grid grid-rows-4 gap-y-4">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`${
                            watching == item
                                ? 'border-black p-1'
                                : 'border-transparent p-1'
                        } border-[2px] row-span-1 cursor-pointer`}
                        onClick={() => {
                            setWatching(item)
                        }}
                    >
                        <img
                            src={item}
                            alt="index"
                            className="w-[170px] h-[138px] object-cover rounded-sm"
                        />
                    </div>
                ))}
            </div>
            <div className="col-span-3">
                <img
                    src={watching}
                    alt=""
                    className="w-full h-[600px] object-cover rounded-sm"
                />
            </div>
        </div>
    )
}

export default ImagePreviewer
