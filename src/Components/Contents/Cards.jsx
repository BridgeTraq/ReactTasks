import React from 'react'
import CardHeader from './CardHeader'

function Cards({ logo, header, title, bg, details, arrow }) {
    return (
        <div>
            <div className='bg-white w-[220px] p-4 rounded-lg'>
                <CardHeader logo={logo} header={header} title={title} bg={bg} />
                <div className='flex justify-between items-center pt-4 text-[#9999a9] text-sm font-semibold'>
                    <p className='text-[#9999a9]'>{details} </p>
                    <p>{arrow} </p>
                </div>
            </div>
        </div>
    )
}

export default Cards

