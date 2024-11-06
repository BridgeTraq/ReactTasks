import image from '../Contents/Images/image2.jpg'
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import HeaderChange from './HeaderChange';

function Header() {

    return (
        <div className="flex justify-between items-center bg-white px-5 py-4 border-b-[1px] border-b-[#eceff5]">
            <HeaderChange />
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 border-r-[2px] border-[#f8f9fb] pr-4 relative">
                    <FiSearch className="text-[#9999a9] text-2xl cursor-pointer" />
                    <IoNotificationsOutline className="text-[#9999a9] text-2xl cursor-pointer" />
                    <span className='block absolute h-[6px] w-[6px] rounded-full bg-red-600 right-4 mr-[4px] top-0 mt-[2px]'></span>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={image} alt="" className='h-[25px] w-[25px] object-cover rounded-full' />
                    <div className='flex flex-col'>
                        <p className="font-bold">Alesia K.</p>
                        <h4 className="text-[#9999a9] text-sm">Pro Member</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header