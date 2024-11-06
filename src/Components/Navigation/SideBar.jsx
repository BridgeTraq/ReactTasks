import { Link, useLocation } from "react-router-dom"
import { LiaAtomSolid, LiaBoldSolid, LiaCameraRetroSolid, LiaCertificateSolid, LiaConnectdevelop, LiaFigma, LiaMedapps, LiaMoon, LiaQuestionCircle, LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import { LiaHomeSolid } from "react-icons/lia"
import { LiaBookmark } from "react-icons/lia";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { FcSettings } from "react-icons/fc";
import { useState } from "react";
import { HiMiniArrowLeftEndOnRectangle } from "react-icons/hi2";
import classNames from 'classnames'

const linkStyles = 'flex gap-2 items-center px-2'

function SideBar() {
    const [isDark, setIsDark] = useState(false)
    const { pathname } = useLocation()


    function handleToggle() {
        setIsDark(!isDark)
    }
    return (
        <nav className="flex flex-col justify-between p-4 bg-white h-full">
            <header className="flex-1">
                <div className="flex flex-col gap-5 font-semibold">
                    <header className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span>
                                <LiaAtomSolid style={{ fontSize: '30px', color: '#1d877d' }} />
                            </span>
                            <h1 className="text-2xl font-bold">Academic</h1>
                        </div>
                        <div>
                            <HiMiniArrowLeftEndOnRectangle style={{ fontSize: '25px', color: '#9999a9' }} />
                        </div>
                    </header>

                    <main>
                        <div className="flex flex-col gap-2 border-b-[1px] border-slate-100 py-5 text-[#9999A9]">
                            <div>
                                <Link to='/' className={classNames(pathname === '/' ? 'bg-[#f8f9fb] px-2 rounded-md text-[#28918b]' : '', linkStyles)}>
                                    <LiaHomeSolid className="text-xl" />
                                    <span>Home</span>
                                </Link>
                            </div>
                            <div>
                                <Link to='/bookmarks' className={classNames(pathname === '/bookmarks' ? 'bg-[#f8f9fb] px-2 rounded-md text-[#28918b]' : '', linkStyles)}>
                                    <LiaBookmark className="text-xl" />
                                    <span>Bookmarks</span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 border-b-[1px] border-slate-100 py-5 text-[#9999A9]">
                            <div>

                                <Link to='/courses' className={classNames(pathname === '/courses' ? 'bg-[#f8f9fb] px-2 rounded-md text-[#28918b]' : '', linkStyles)}>
                                    <LiaGraduationCapSolid className="text-xl" />
                                    <span>Courses</span>
                                </Link>
                            </div>
                            <div>

                                <Link to='/tutorials' className={classNames(pathname === '/tutorials' ? 'bg-[#f8f9fb] px-2 rounded-md text-[#28918b]' : '', linkStyles)}>
                                    <LiaCameraRetroSolid className="text-xl" />
                                    <span>Tutorials</span>
                                </Link>
                            </div>
                            <div>

                                <Link to='/best' className={classNames(pathname === '/best' ? 'bg-[#f8f9fb] px-2 rounded-md text-[#28918b]' : '', linkStyles)}>
                                    <LiaMedapps className="text-xl" />
                                    <span>Best Practices</span>
                                </Link>
                            </div>
                            <div>

                                <Link to='/certifications' className={classNames(pathname === '/certifications' ? 'bg-[#f8f9fb] px-2 rounded-md text-[#28918b]' : '', linkStyles)}>
                                    <LiaCertificateSolid className="text-xl" />
                                    <span>Certifications</span>
                                </Link>
                            </div>

                        </div>
                        <div className="flex flex-col gap-2 py-5 text-[#9999A9]">
                            <div>

                                <Link to='/resources' className={classNames(pathname === '/resources' ? 'bg-[#f8f9fb] px-2 rounded-md text-[#28918b]' : '', linkStyles)}>
                                    <LiaFigma className="text-xl" />
                                    <span>Resources</span>
                                </Link>
                            </div>
                            <div>
                                <Link to='/events' className={classNames(pathname === '/events' ? 'bg-[#f8f9fb] px-2 rounded-md text-[#28918b]' : '', linkStyles)}>
                                    <LiaBoldSolid className="text-xl" />
                                    <span>Events</span>
                                </Link>
                            </div>
                            <div>
                                <Link to='/community' className={classNames(pathname === '/community' ? 'bg-[#f8f9fb] px-2 rounded-md text-[#28918b]' : '', linkStyles)}>
                                    <LiaConnectdevelop className="text-xl" />
                                    <span>Community</span>
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
            </header>

            <footer className="flex flex-col gap-2 text-[#9999A9] font-semibold">
                <div>
                    <Link to='/setting' className={classNames(pathname === '/setting' ? 'bg-[#f8f9fb] px-2 rounded-md text-[#28918b]' : '', linkStyles)}>
                        <FcSettings className='text-xl' />
                        <span>Setting</span>
                    </Link>
                </div>
                <div>
                    <Link to='/help' className={classNames(pathname === '/help' ? 'bg-[#f8f9fb] px-2 rounded-md text-[#28918b]' : '', linkStyles)}>
                        <LiaQuestionCircle className="text-xl" />
                        <span>Help Center</span>
                    </Link>
                </div>
                <button onClick={handleToggle} className="flex justify-between items-center px-2">
                    <div className="flex gap-2 items-center">
                        <LiaMoon className="text-xl" />
                        <span>Dark Mode</span>
                    </div>
                    <div>
                        {isDark === false ? <LiaToggleOffSolid className="text-2xl" /> : <LiaToggleOnSolid className="text-2xl" />}
                    </div>
                </button>
            </footer>
        </nav>
    )
}
export default SideBar