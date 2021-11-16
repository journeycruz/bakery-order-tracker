import React from 'react'

function Ticker() {
    return (
        <div className='relative'>
            <div className='absolute right-0 bottom-1/2 left-0 bg-gradient-to-t from-gray-100 pointer-events-none'>
                <div className='flex overflow-hidden -my-8'>
                    <ul className='flex items-center w-full py-8'>
                        <li className='px-3 md:px-4 flex-none transform translate-x-full'>
                            test
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Ticker