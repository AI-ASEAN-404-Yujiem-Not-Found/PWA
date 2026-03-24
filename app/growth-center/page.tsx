import BottomNavigation from "../components/bottom-navigation";
import HeaderNoBackground from "../components/header-no-background";
import LayoutSpacing from "../components/layout-spacing";

import Image from 'next/image';

import { FaTractor } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { FaUnlock } from "react-icons/fa";

export default function GrowthCenterPage() {
    return (
        <LayoutSpacing>
            <HeaderNoBackground title='Growth Center' />
            <div className='px-5 pt-2 pb-20 space-y-6'>

                {/* status */}
                <div className='w-full flex flex-col gap-3 items-center justify-center'>
                    <div className='w-full flex justify-center items-center'>
                        <Image
                            src={"/icon-image-fail.png"}
                            width={136} height={178}
                            alt='image-placeholder-status'
                        />
                    </div>
                    <div className='w-full flex flex-col justify-start'>
                        <h1 className='text-[20px] font-semibold'>Not yet suited for this phase</h1>
                        <p className='text-[13px] font-normal'>Based on your data, there are other paths that are more appropriate to optimize your current growth.</p>
                    </div>
                </div>
                {/* status */}

                <div className='w-full flex gap-3 items-center justify-between px-3 py-2 bg-[#B9E5FF] rounded-xl'>
                    <div className='p-2 bg-[#31B5FF] rounded-xl'>
                        <FaTractor className='w-7.5 h-7.5 fill-[#005D85]' />
                    </div>
                    <p className='text-[13px] text-[#625B71]'>&quot;I have a bamboo craft business with a target market...&quot;</p>
                </div>

                <div className='w-full flex flex-col gap-5'>
                    <h1 className='text-[16px] text-gray-500 font-semibold'>Your Trust Journey</h1>
                    <div className='flex flex-row justify-between w-full px-6'>
                        <div className="flex flex-col justify-center items-center">
                            <div className="rounded-full bg-[#31B5FF] p-3">
                                <IoMdCheckmark className="fill-white" />
                            </div>
                            <p className="text-[14px] text-[#005D85] font-semibold">Start</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="rounded-full bg-white p-3 border border-[#31B5FF]">
                                <BsThreeDots className="outline-black" />
                            </div>
                            <p className="text-[14px] text-[#005D85] font-semibold">Consistent</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="rounded-full bg-white p-3 border border-[#31B5FF]">
                                <FaUnlock className="outline-black" />
                            </div>
                            <p className="text-[14px] text-[#005D85] font-semibold">Ready Access</p>
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col gap-5'>
                    <h1 className='text-[16px] text-gray-500 font-semibold'>Option Ways</h1>
                    <div className='flex flex-col gap-4 w-full'>
                        <div className='w-full flex gap-4 items-center justify-between px-3 py-2 bg-white rounded-xl shadow-md border-2 border-gray-300'>
                            <div className='p-2 bg-[#31B5FF] rounded-xl'>
                                <FaTractor className='w-7.5 h-7.5 fill-[#005D85]' />
                            </div>
                            <div className='w-full'>
                                <h2 className='text-[14px] font-semibold'>Gradual Savings Program</h2>
                                <p className='text-[13px] font-normal'>Based on your data, there are other, more appropriate pathways for you.</p>
                            </div>
                            <FaChevronRight className='w-4 h-4' />
                        </div>

                        <div className='w-full flex gap-4 items-center justify-between px-3 py-2 bg-white rounded-xl shadow-md border-2 border-gray-300'>
                            <div className='p-2 bg-[#31B5FF] rounded-xl'>
                                <FaTractor className='w-7.5 h-7.5 fill-[#005D85]' />
                            </div>
                            <div className='w-full'>
                                <h2 className='text-[14px] font-semibold'>Gradual Savings Program</h2>
                                <p className='text-[13px] font-normal'>Based on your data, there are other, more appropriate pathways for you.</p>
                            </div>
                            <FaChevronRight className='w-4 h-4' />
                        </div>

                        <div className='w-full flex gap-4 items-center justify-between px-3 py-2 bg-white rounded-xl shadow-md border-2 border-gray-300'>
                            <div className='p-2 bg-[#31B5FF] rounded-xl'>
                                <FaTractor className='w-7.5 h-7.5 fill-[#005D85]' />
                            </div>
                            <div className='w-full'>
                                <h2 className='text-[14px] font-semibold'>Gradual Savings Program</h2>
                                <p className='text-[13px] font-normal'>Based on your data, there are other, more appropriate pathways for you.</p>
                            </div>
                            <FaChevronRight className='w-4 h-4' />
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col gap-2'>
                    <button className="p-2 w-full max-w-100 bg-[#004868] text-white rounded-md flex items-center gap-2 justify-center">
                        <p>Continue Process</p>
                        <FaChevronRight className='w-4 h-4 fill-white' />
                    </button>
                    <button className="p-2 w-full max-w-100 border-2 border-[#004868] text-[#004868] border-dashed rounded-md flex items-center gap-2 justify-center">
                        Try Send It Again
                    </button>
                </div>

            </div>
            <BottomNavigation />
        </LayoutSpacing>
    )
}
