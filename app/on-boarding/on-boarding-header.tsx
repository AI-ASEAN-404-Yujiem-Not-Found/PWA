import Image from 'next/image';
import { MdNotificationsNone } from "react-icons/md";

export default function OnboardingHeader() {
    return (
        <div className='w-full bg-[#B4C9FF] p-5 flex items-start justify-between'>
            <div>
                <div className="w-full flex items-end gap-5">
                    <Image alt="image header icon" src={'/icon-image-ok.png'} width={98} height={100} />
                    <div>
                        <p className='font-medium text-[20px]'>Welcome, <span className='font-semibold'>Andi</span> !</p>
                        <p className='text-[11px]'>Are you ready for today&apos;s activity?</p>
                    </div>
                </div>
            </div>
            <div className='p-2 rounded-full bg-[#FFFFFF99]'>
                <MdNotificationsNone className='w-5 h-5 text-[#004868] bg-[004868]' fill='#004868' />
            </div>
        </div>
    );
}
