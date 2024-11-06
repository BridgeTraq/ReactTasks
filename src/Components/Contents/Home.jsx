import React from 'react'
import Cards from './Cards'
import image from '././Images/image2.jpg'
import Recommendations from './Recommendations'
import { LiaCertificateSolid, LiaFigma, LiaGraduationCapSolid } from 'react-icons/lia'
import { MdOutlinePlayLesson } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SiCodesignal } from "react-icons/si";
import { TbUxCircle } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import { GrInProgress } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { MdAnimation } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { GiNetworkBars } from "react-icons/gi";
import { FaRegClock } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import Charts from './Charts'

function Home() {
    return (
        <div className='px-[30px] pt-[30px] pb-[120px] h-screen overflow-y-auto'>
            <div className='flex gap-5'>
                <div>
                    <div className='flex gap-2 mb-[30px]'>
                        <Cards logo={<LiaGraduationCapSolid />} header="24" title="Enrolled Course" details="View details" arrow={<FaArrowRight />} bg={{ backgroundColor: '#419994' }} />
                        <Cards logo={<MdOutlinePlayLesson />} header="56" title="Lesson" details="View details" arrow={<FaArrowRight />} bg={{ backgroundColor: '#a3a2ff' }} />
                        <Cards logo={<LiaCertificateSolid />} header="17" title="Certificates" details="View details" arrow={<FaArrowRight />} bg={{ backgroundColor: '#eb8361' }} />
                    </div>

                    <div className='bg-white p-4 rounded-lg '>
                        <div className='flex justify-between items-center mb-[10px]'>
                            <h1 className='font-bold'>Continue Learning</h1>
                            <button className='border-[1px] border-[#9999a9] rounded-md py-[2px] px-[4px]'>See All</button>
                        </div>

                        <div className='flex gap-[200px] bg-[#f8f9fb] w-[100%] rounded-md px-3 py-2 mb-[10px]'>
                            <div className='flex gap-[150px]'>
                                <h1 className='text-[#9999a9] font-bold'>Course Name</h1>
                                <h1 className='text-[#9999a9] font-bold'>Progress</h1>
                            </div>
                            <h1 className='text-[#9999a9] font-bold'>Status</h1>
                        </div>

                        <div className='flex justify-between items-center px-3 py-2 border-b-[2px] border-dashed '>
                            <div className='flex items-center gap-3'>
                                <span className='bg-[#2dd5ff] h-[32px] w-[32px] text-white rounded-md flex justify-center items-center'><SiCodesignal /></span>
                                <div>
                                    <h1 className='font-bold text-sm'>Design Accessibility</h1>
                                    <p className='text-[#9999a9] text-sm'>Advanced * 5 hours</p>
                                </div>
                            </div>

                            <div className='flex gap-1 items-center text-sm'>
                                <div className='h-[6px] w-[160px] bg-[#f8f9fb] rounded-full'>
                                    <span className='h-[6px] bg-[#1d877d] w-[60px] rounded-full block'></span>
                                </div>
                                <span className='text-[#9999a9]'>30%</span>
                            </div>

                            <button className='text-[#9999a9] flex items-center gap-2 border-[1px] text-sm rounded-md p-1'>
                                <GrInProgress className='text-[#fd9c84]' />
                                <span>In Progress</span>
                            </button>

                            <IoIosArrowForward className='text-[#9999a9]' />
                        </div>

                        <div className='flex justify-between items-center px-3 py-2 border-b-[2px] border-dashed '>
                            <div className='flex items-center gap-3'>
                                <span className='bg-[#8356fe] h-[32px] w-[32px] text-white rounded-md flex justify-center items-center'><TbUxCircle /></span>
                                <div>
                                    <h1 className='font-bold text-sm'>UX Research</h1>
                                    <p className='text-[#9999a9] text-sm'>Intermediate * 6 hours</p>
                                </div>
                            </div>

                            <div className='flex ml-[-10px] gap-1 items-center text-sm'>
                                <div className='h-[6px] w-[160px] bg-[#f8f9fb] rounded-full'>
                                    <span className='h-[6px] bg-[#1d877d] w-[120px] rounded-full block'></span>
                                </div>
                                <span className='text-[#9999a9]'>70%</span>
                            </div>

                            <button className='text-[#9999a9] flex items-center gap-2 border-[1px] text-sm rounded-md p-1'>
                                <GrInProgress className='text-[#fd9c84]' />
                                <span>In Progress</span>
                            </button>

                            <IoIosArrowForward className='text-[#9999a9]' />
                        </div>

                        <div className='flex justify-between items-center px-3 py-2'>
                            <div className='flex items-center gap-3'>
                                <span className='bg-[#000000] h-[32px] w-[32px] text-white rounded-md flex justify-center items-center'><LiaFigma /></span>
                                <div>
                                    <h1 className='font-bold text-sm'>Figma for Beginner</h1>
                                    <p className='text-[#9999a9] text-sm'>Beginner * 7 hours</p>
                                </div>
                            </div>

                            <div className='flex gap-1 items-center text-sm'>
                                <div className='h-[6px] w-[160px] bg-[#f8f9fb] rounded-full'>
                                    <span className='h-[6px] bg-[#1d877d] w-[160px] rounded-full block'></span>
                                </div>
                                <span className='text-[#9999a9]'>100%</span>
                            </div>

                            <button className='text-[#9999a9] flex items-center gap-2 border-[1px] text-sm rounded-md p-1'>
                                <FaCheck className='text-[#8acadb]' />
                                <span>Completed</span>
                            </button>

                            <IoIosArrowForward className='text-[#9999a9]' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col bg-white p-4 rounded-2xl w-full'>
                    <div className='flex items-center justify-between mb-[10px]'>
                        <h1 className='font-bold'>Progress</h1>
                        <BsThreeDotsVertical className='border-[1px] border-[#9999a9] rounded-md p-1 h-[20px] text-xl' />
                    </div>
                    <div className='flex flex-col gap-2 items-center mb-[10px]'>
                        <div className='flex items-center justify-center rounded-full h-[80px] w-[80px] border-[2px] border-r-[#1d877d]'>
                            <img className='rounded-full h-[50px] w-[50px] object-cover' src={image} alt="A woman pic" />
                        </div>
                        <h1 className='font-bold'>Alesia Karapova</h1>
                        <p className='text-[#9999a9]'>Basic Member</p>
                    </div>
                    <div className='flex-1 bg-[#f8f9fb] p-3 rounded-lg'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h1 className='font-bold'>30</h1>
                                <p className='text-[#9999a9]'>Hours spend</p>
                            </div>
                            <div>
                                <select className='border-[1px] border-[#9999a9] rounded-md p-1 text-[#9999a9]'>
                                    <option>This week</option>
                                </select>
                            </div>
                        </div>
                        <Charts />
                    </div>
                </div>
            </div>

            <div className='mt-[20px] bg-white p-[30px] rounded-lg'>
                <div className='flex justify-between items-center mb-[10px]'>
                    <h1 className='font-bold'>Recommended from you</h1>
                    <button className='border-[1px] px-2 py-1 rounded-md text-sm text-[#9999a9]'>See All</button>
                </div>

                <div className='grid grid-cols-3 gap-2'>
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

                </div>
            </div>
        </div>
    )
}

export default Home
