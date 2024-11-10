import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import CardHeader from './CardHeader'
import LearningPercent from './LearningPercent'
import LearningProgress from './LearningProgress'

export default function CourseDuration({ logo, header, title, bg, id, firsthw, secondhw, label, progressLogo, progressLabel, changeLogo }) {
    return (
        <div>
            <div className={changeLogo === 'true' ? 'flex justify-between items-center px-3 py-2' : 'flex justify-between items-center px-3 py-2 border-b-[2px] border-dashed '}>
                <CardHeader logo={logo}
                    header={header}
                    title={title}
                    bg={bg}
                    id={id} />

                <LearningPercent
                    firsthw={firsthw}
                    secondhw={secondhw}
                    label={label} />

                <LearningProgress
                    progressLogo={progressLogo}
                    progressLabel={progressLabel}
                    changeLogo={changeLogo} />

                <IoIosArrowForward className='text-[#9999a9]' />
            </div>
        </div>
    )
}
