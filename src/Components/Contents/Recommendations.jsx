import React from 'react'

function Recommendations({ logo, header, details, logo2, title, para1, para2, star, rating, amount, bg, bgLogo }) {
    return (
        <div>
            <div className='p-4 border-[2px] border-[#f8f9fb] rounded-lg'>
                <div className='border-b-[1px] border-dashed pb-3 mb-[10px]'>
                    <div style={bg} className='flex justify-center items-center h-[130px] bg-[#156862] rounded-lg'>
                        <span style={bgLogo} className='h-[40px] w-[40px] flex justify-center items-center rounded-md text-white font-bold text-2xl'>{logo}</span>
                    </div>
                    <div className='mt-[10px]'>
                        <h1 className='font-bold'>{header} </h1>
                        <p className='text-sm text-[#9999a9]'>{details} </p>
                    </div>
                </div>

                <div className='flex justify-between items-center text-[#9999a9] font-medium text-sm'>
                    <div className='flex items-center gap-2'>
                        <span>{logo2} </span>
                        <div className='flex items-center gap-2'>
                            <p>{title} </p>
                            <p>{para1}</p>
                            <p>{para2}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-[#ffb94e]'>{star}</p>
                        <p className='text-black'>{rating} <span className='text-[#9999a9]'>{amount}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommendations
