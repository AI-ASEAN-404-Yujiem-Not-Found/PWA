import Image from 'next/image';
import { FaChevronLeft } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";

export default function TellYourNeedHeader() {
    return (
        <div className='w-full bg-[#B4C9FF] p-5 flex items-start justify-between'>
            <div className='flex items-start gap-3'>
                <div className='bg-[#298191] p-2 w-9 h-9 rounded-md'>
                    <FaChevronLeft className='w-5 h-5 text-white' />
                </div>
                <div className="w-full flex items-end gap-2">
                    <Image alt="image header icon" src={'/icon-image-ok.png'} width={49} height={50} />
                    <p className='font-medium text-[16px]'>Register through story</p>
                </div>
            </div>
            <div className='p-2 rounded-full bg-[#FFFFFF99]'>
                <MdNotificationsNone className='w-5 h-5 text-[#004868] fill-[#004868]' fill='#004868' />
            </div>
        </div>
    );
}
