import React from 'react'

export default function LearningPercent({ firsthw, secondhw, label }) {
    return (
        <div>
            <div className='flex gap-1 items-center text-sm'>
                <div style={firsthw} className='bg-[#f8f9fb] rounded-full'>
                    <span style={secondhw} className='bg-[#1d877d] rounded-full block'></span>
                </div>
                <span className='text-[#9999a9]'>{label}</span>
            </div>
        </div>
    )
}
