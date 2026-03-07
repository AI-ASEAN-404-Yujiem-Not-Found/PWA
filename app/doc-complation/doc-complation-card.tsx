import { IoIosAdd } from "react-icons/io";

export default function DocComplationCard() {
    return (
        <div className='w-full flex flex-col gap-2'>
            <h2 className='text-[16px] font-medium'>Scan/Upload identity card</h2>
            <div className='w-full aspect-362/213 flex flex-col justify-center items-center gap-5 rounded-lg border-2 border-gray-300 border-dashed'>
                <div className='bg-[#747775] p-3 rounded-lg'>
                    <IoIosAdd className='fill-white w-15 h-15' />
                </div>
                <div>
                    <p className='text-center text-[12px] text-gray-600'>Scan/Upload KTP terbarumu</p>
                    <p className='text-center text-[12px] text-gray-600'>Max file size : 10 MB</p>
                </div>
            </div>
        </div>
    );
}
