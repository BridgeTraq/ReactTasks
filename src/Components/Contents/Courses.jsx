import React from 'react'
import { SiCodesignal } from 'react-icons/si'
import CoursesGrid from './CoursesGrid'
import { TbUxCircle } from 'react-icons/tb'
import { LiaFigma } from 'react-icons/lia'
import { FaCircleNodes, FaRegClock, FaStar } from 'react-icons/fa6'
import Recommendations from './Recommendations'
import { GiGearStickPattern, GiNetworkBars } from 'react-icons/gi'
import { MdAnimation } from 'react-icons/md'
import { CgSandClock } from 'react-icons/cg'
import { HiAdjustmentsHorizontal, HiMiniSquare3Stack3D } from 'react-icons/hi2'

export default function Courses() {
    return (
        <div className='bg-white my-[1px] ml-[1px] px-[20px] pt-[30px] pb-[130px] h-full overflow-y-auto'>
            <h1 className='font-bold text-lg mb-4'>Your Courses</h1>
            <div className='grid grid-cols-3 gap-4'>
                <CoursesGrid
                    logo={<SiCodesignal />}
                    title="Design Accessibility"
                    para1="25% complete"
                    para2="*"
                    para3="3 hours left"
                    para4={<FaRegClock />}
                    styles={{ height: '8px', width: '25%', backgroundColor: '#156862' }}
                    logoBg={{ backgroundColor: '#2dd5ff' }}
                />
                <CoursesGrid
                    logo={<TbUxCircle />}
                    title="UX Research"
                    para1="70% complete"
                    para2="*"
                    para3="1.5 hours left"
                    para4={<FaRegClock />}
                    styles={{ height: '8px', width: '70%', backgroundColor: '#156862' }}
                    logoBg={{ backgroundColor: '#8356fe' }} />
                <CoursesGrid
                    logo={<LiaFigma />}
                    title="Design Terminology"
                    para1="100% complete"
                    para2="*"
                    para3="0 hours left"
                    para4={<FaRegClock />}
                    styles={{ height: '8px', width: '100%', backgroundColor: '#156862' }}
                    logoBg={{ backgroundColor: '#f4b549' }} />
            </div>
            <div className='mt-7'>
                <header className='flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <button className='flex items-center gap-2 text-[#9999a9] border-[1px] border-[f8f9fb] py-1 px-2 rounded-md font-semibold'>
                            <HiAdjustmentsHorizontal fontSize={20} />
                            <p>Filter</p>
                        </button>
                        <h1 className='text-lg font-bold'>All Courses</h1>
                    </div>

                    <button className='border-[1px] border-[#f8f9fb] rounded-md py-1 px-2 text-[#9999a9] font-semibold'>
                        <select className='cursor-pointer'>
                            <option>Recommendation</option>
                        </select>
                    </button>
                </header>

                <main className='grid grid-cols-3 gap-2 mt-6'>
                    <Recommendations
                        bg={{ backgroundColor: '#156862' }}
                        bgLogo={{ backgroundColor: '#39948d' }}
                        logo={<LiaFigma />}
                        header='Design Workshop Facilitation'
                        details='Master your skills in design workshop facilitation and learn how to promote collaboration and find...'
                        logo2={<GiNetworkBars />}
                        title='Advance *'
                        para1={<FaRegClock />}
                        para2='6 hours'
                        star={<FaStar />}
                        rating='4.9'
                        amount='(1,890)' />

                    <Recommendations
                        bg={{ backgroundColor: '#f4b549' }}
                        bgLogo={{ backgroundColor: '#976726' }}
                        logo={<MdAnimation />}
                        header='Animation for Beginners'
                        details='Procreate Dreams has transformed my ability to make animation from my art. Yet when I first op...'
                        logo2={<GiNetworkBars />}
                        title='Beginner *'
                        para1={<FaRegClock />}
                        para2='6 hours'
                        star={<FaStar />}
                        rating='4.9'
                        amount='(1,890)' />

                    <Recommendations
                        bg={{ backgroundColor: '#106b97' }}
                        bgLogo={{ backgroundColor: '#32cefd' }}
                        logo={<GiGearStickPattern />}
                        header='Common Design Pattern'
                        details='Master your skills in design workshop facilitation and learn how to promote collaboration and find...'
                        logo2={<GiNetworkBars />}
                        title='Intermediate *'
                        para1={<FaRegClock />}
                        para2='6 hours'
                        star={<FaStar />}
                        rating='4.9'
                        amount='(1,890)' />

                    <Recommendations
                        bg={{ backgroundColor: '#936dff' }}
                        bgLogo={{ backgroundColor: '#5d44a9' }}
                        logo={<HiMiniSquare3Stack3D />}
                        header='3D Design Foundation'
                        details='Learn about the many application of 3D design and get familiar with the basic of 3D, such as th...'
                        logo2={<GiNetworkBars />}
                        title='Advance *'
                        para1={<FaRegClock />}
                        para2='6 hours'
                        star={<FaStar />}
                        rating='4.9'
                        amount='(1,890)' />

                    <Recommendations
                        bg={{ backgroundColor: '#000000' }}
                        bgLogo={{ backgroundColor: '#292836' }}
                        logo={<CgSandClock />}
                        header='Framer the Beginners'
                        details='Master your skill in design workshop facilitation and learn how to promoter collaboration...'
                        logo2={<GiNetworkBars />}
                        title='Beginner *'
                        para1={<FaRegClock />}
                        para2='6 hours'
                        star={<FaStar />}
                        rating='4.9'
                        amount='(1,890)' />

                    <Recommendations
                        bg={{ backgroundColor: '#ff784b' }}
                        bgLogo={{ backgroundColor: '#aa5334' }}
                        logo={<FaCircleNodes />}
                        header='Design Work Facilitation'
                        details='Master your skills in design workshop facilitation and learn how to promote collaboration and find...'
                        logo2={<GiNetworkBars />}
                        title='Intermediate *'
                        para1={<FaRegClock />}
                        para2='6 hours'
                        star={<FaStar />}
                        rating='4.9'
                        amount='(1,890)' />
                </main>
            </div>
        </div>
    )
}
