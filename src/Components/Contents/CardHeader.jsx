import React from 'react'

export default function CardHeader({ logo, header, title, bg, id }) {
    return (
        <div>
            <div className={id === '1' ? 'flex gap-3 items-center px-3 py-1' : 'flex gap-3 items-center px-3 py-1 border-dashed border-b-[1px]'}>
                <span style={bg} className='h-[32px] w-[32px] flex justify-center items-center rounded-md text-white text-xl'>{logo}</span>
                <div>
                    <h3 className={id === '1' ? 'text-sm font-bold' : 'text-xl font-bold'}>{header}</h3>
                    <p className={id === '1' ? 'text-sm text-[#9999a9]' : 'text-[#9999a9] text-sm font-semibold'}>{title}</p>
                </div>
            </div>
        </div>
    )
}
