import React from 'react'

export default function CoursesGrid({ logo, title, para1, para2, para3, styles, logoBg, para4 }) {
    return (
        <div>
            <div className='p-4 border-[2px] border-[#f8f9fb] rounded-lg'>
                <div style={logoBg} className='h-[35px] w-[35px] text-white rounded-md flex justify-center items-center mb-2'>{logo}</div>
                <div className='flex flex-col gap-1'>
                    <h1 className='font-bold text-lg'>{title}</h1>
                    <div className='flex items-center gap-2 text-sm text-[#9999a9]'>
                        <p>{para1}</p>
                        <p>{para2}</p>
                        <p>{para4}</p>
                        <p>{para3}</p>
                    </div>
                    <div className='h-[10px] bg-[#f8f9fb] rounded-full'>
                        <span style={styles} className='rounded-full block'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
