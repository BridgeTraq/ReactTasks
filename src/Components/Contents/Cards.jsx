import React from 'react'

function Cards({ logo, header, title, details, arrow, bg }) {
    return (
        <div>
            <div className='bg-white w-[220px] p-4 rounded-lg'>
                <div className='flex gap-3 items-center pb-4 border-dashed border-b-[1px] '>
                    <span style={bg} className='h-[32px] w-[32px] flex justify-center items-center rounded-md text-white text-xl'>{logo}</span>
                    <div>
                        <h3 className='text-xl font-bold'>{header}</h3>
                        <p className='text-[#9999a9] text-sm font-semibold'>{title}</p>
                    </div>
                </div>
                <div className='flex justify-between items-center pt-4 text-[#9999a9] text-sm font-semibold'>
                    <p className='text-[#9999a9]'>{details} </p>
                    <p>{arrow} </p>
                </div>
            </div>
        </div>
    )
}

export default Cards
