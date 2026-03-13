'use client'
import { FaChevronLeft } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import { useRouter } from 'next/navigation'

export default function GrowthCenterResultHeader() {
    const router = useRouter()
    return (
        <div className='w-full p-5 flex items-start justify-between'>
            <div className='bg-[#298191] p-2 w-9 h-9 rounded-md' onClick={() => router.back()}>
                <FaChevronLeft className='w-5 h-5 text-white' />
            </div>

            <div className="text-[20px] font-semibold">Try it First</div>

            <div className='p-2 rounded-full bg-[#FFFFFF99]'>
                <MdNotificationsNone className='w-5 h-5 text-[#004868] fill-[#004868]' fill='#004868' />
            </div>
        </div>
    );
}
