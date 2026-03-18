import { IoMdInformationCircle } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";

export default function OfflineBadge() {
    return (
        <div className='w-full flex justify-between items-center bg-gray-300 rounded-full p-2'>
            <div className='flex items-center text-[11px] text-[#3D01A4] gap-2'>
                <IoMdInformationCircle className='fill-[#3D01A4] w-4 h-4' />
                <p>Offline - Safe</p>
            </div>
            <FaChevronRight className='fill-gray-700 w-4 h-4' />
        </div>
    )
}
