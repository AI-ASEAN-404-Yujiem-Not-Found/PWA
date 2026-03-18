import Link from "next/link";
import { FaTractor } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

export default function OpportunityCard() {
    return (
        <div className='px-2 py-5 rounded-xl w-full border border-gray-200 shadow-lg space-y-3'>
            <div className='w-full flex items-center justify-between'>
                <div className='p-3 bg-[#EBE0FF] rounded-md'>
                    <FaTractor className='w-6.5 h-6.5 fill-[#3D01A4] text-white' />
                </div>
                <div className='p-3 bg-[#EBE0FF] rounded-md'>
                    <FaPlayCircle className='w-6.5 h-6.5 fill-[#3D01A4] text-white' />
                </div>
            </div>
            <h1 className='text-[20px] text-gray-700 font-semibold'>Loan capital for superior rice seeds</h1>
            <div className='bg-[#D3F4D7] py-2 px-4 rounded-xl flex items-center gap-2'>
                <FaCheck className='w-3 h-3 fill-[#2B9637]' />
                <p className='text-[10px] text-[#2B9637]'>Recommended by the village cooperative</p>
            </div>
            <p className='text-[12px] text-gray-600 italic'>This is a bamboo craft business with a target market of...&quot;</p>
            <div className='w-full flex flex-col gap-3 justify-center'>
                <button className="p-3 w-full max-w-100 bg-[#004868] text-white rounded-md">
                    <Link href={"/doc-complation"}>Apply Now</Link>
                </button>
                <button className="p-3 w-full max-w-100 border border-[#004868] text-[#004868] rounded-md">See Details</button>
            </div>
        </div>
    );
}
