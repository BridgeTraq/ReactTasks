import { Link, useLocation } from "react-router-dom"
import { LiaAtomSolid, LiaMoon, LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import { useState } from "react";
import { HiMiniArrowLeftEndOnRectangle } from "react-icons/hi2";
import { sideBars1 } from "./sidebarMap";
import { sideBars2 } from "./sidebarMap";
import { sideBars3 } from "./sidebarMap";
import { last } from "./sidebarMap";

const linkStyles = 'flex gap-2 items-center px-2'
const activeLink = 'flex gap-2 items-center bg-[#f8f9fb] px-2 rounded-md text-[#28918b]'

function SideBar() {
    const [isDark, setIsDark] = useState(false)


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
                            {sideBars1.map((item) => (
                                <Links key={item.key} item={item} />
                            ))}
                        </div>
                        <div className="flex flex-col gap-2 border-b-[1px] border-slate-100 py-5 text-[#9999A9]">
                            {sideBars2.map((item) => (
                                <Links key={item.key} item={item} />
                            ))}
                        </div>
                        <div className="flex flex-col gap-2 border-b-[1px] border-slate-100 py-5 text-[#9999A9]">
                            {sideBars3.map((item) => (
                                <Links key={item.key} item={item} />
                            ))}
                        </div>
                    </main>
                </div>
            </header>

            <footer className="flex flex-col gap-2 text-[#9999A9] font-semibold">
                {last.map((item) => (
                    <Links key={item.key} item={item} />
                ))}
                <button onClick={handleToggle} className="flex justify-between items-center px-2">
                    <div className="flex gap-2 items-center">
                        <LiaMoon className="text-xl" />
                        <span>Dark Mode</span>
                    </div>
                    <div className="text-2xl">
                        {isDark === false ? <LiaToggleOffSolid /> : <LiaToggleOnSolid />}
                    </div>
                </button>
            </footer>
        </nav >
    )
}
export default SideBar

export function Links({ item }) {
    const { pathname } = useLocation()
    return (
        <div>
            <Link className={pathname === item.path ? activeLink : linkStyles} to={item.path}>
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
            </Link>
        </div>
    )
}