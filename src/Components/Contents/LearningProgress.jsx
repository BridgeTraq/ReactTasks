import React from 'react'


export default function LearningProgress({ progressLogo, progressLabel, changeLogo }) {
    return (
        <div>
            <div className='text-[#9999a9] flex items-center gap-2 border-[1px] text-sm rounded-md p-1'>
                <span className={changeLogo === 'true' ? 'text-[#8acadb]' : 'text-[#fd9c84]'}>{progressLogo}</span>
                <span>{progressLabel}</span>
            </div>
        </div>
    )
}
