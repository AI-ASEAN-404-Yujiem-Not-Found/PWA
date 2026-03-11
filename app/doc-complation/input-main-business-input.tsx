import { CiCircleInfo } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";

export default function InputMainBusinessInput() {
    return (
        <div className='w-full flex flex-col gap-3'>
            <h1 className='text-[16px] font-semibold'>Select your main business needs</h1>
            <div className='w-full flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 p-2 rounded-l-md bg-gray-50'>
                        <p>ID</p>
                        <FaChevronDown className='w-2 h-2' />
                    </div>
                    <input
                        type="text" name="phonenumber" id="phonenumber" placeholder='+62 (555) 000-0000'
                        className='w-full p-2'
                    />
                    <div className='px-1'>
                        <CiCircleInfo className='w-5 h-5' />
                    </div>
                </div>
                <p className='text-[14px] text-gray-500'>Select your needs here.</p>
            </div>
        </div>
    );
}
