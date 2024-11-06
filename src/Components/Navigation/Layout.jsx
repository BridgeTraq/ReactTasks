import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
import Header from "./Header"


function Layout() {

    return (
        <div className="flex gap-[2px] bg-[#f8f9fb] h-screen w-screen overflow-hidden">
            <div className=' w-[300px]'>
                <SideBar />
            </div>
            <div className="w-full h-full">
                <Header />
                <Outlet className='bg-[]' />
            </div>
        </div>
    )
}
export default Layout