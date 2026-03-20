import { IoMdCloudDone, IoMdMenu } from 'react-icons/io';
import { FaCheck, FaChevronDown } from 'react-icons/fa6';
import Image from 'next/image';
import OfflineBadge from '../opportunity/offline-badge';
import LayoutSpacing from '../components/layout-spacing';
import HeaderBack from '../components/header-back';
import BottomNavigation from '../components/bottom-navigation';

export default function SaveModePage() {
    return (
        <LayoutSpacing>
            <HeaderBack title='Opportunity' />
            <div className='w-full pb-16'>

                <div className='py-2 bg-white px-5'>

                    <OfflineBadge />

                    <div className='w-full flex items-center justify-between pt-5'>
                        <div className='flex items-center gap-2'>
                            <div className='p-2 rounded-xl border border-gray-500 flex items-center gap-2'>
                                <IoMdCloudDone className='w-5 h-5' />
                                <p className='text-[13px]'>Saved</p>
                            </div>
                            <div className='p-2 rounded-xl border border-gray-500 flex items-center gap-2'>
                                <IoMdMenu className='w-5 h-5' />
                                <p className='text-[13px]'>History</p>
                            </div>
                        </div>
                        <div className='p-2 rounded-xl border border-gray-500 flex items-center gap-2'>
                            <FaChevronDown className='w-3 h-3' />
                            <p className='text-[13px]'>Menarik Dahulu</p>
                        </div>
                    </div>

                    <div className='w-full flex justify-between items-center pt-5 gap-2'>
                        <div className='w-full py-2 px-4 rounded-md border border-gray-300 flex flex-col items-center gap-2'>
                            <h2>Your Submission is Saved</h2>
                            <Image width={322} height={83} alt='submission-placeholder' src={"/save-submission-placeholder.png"} />
                            <div className='w-full flex p-2 items-center gap-2 rounded-full border border-green-600 bg-green-200'>
                                <FaCheck className='w-3 h-3 fill-green-700' />
                                <p className='text-[10px] font-semibold text-green-700'>Your request is saved securedly</p>
                            </div>
                            <div className='w-full flex p-2 items-center gap-2 rounded-full border border-gray-300 bg-gray-200'>
                                <FaCheck className='w-3 h-3' />
                                <p className='text-[10px] font-semibold'>Your request is saved securedly</p>
                            </div>

                            <div className='w-full flex flex-col gap-2 items-center py-3'>
                                <button className='w-fit text-white p-2 rounded-md bg-[#004EEB] text-[12px]'>Nice, Let&apos;s Prepare for Later</button>
                                <p className='text-gray-500 text-[9px] w-full text-center'>The form will be sent when there is a signal.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <BottomNavigation />
        </LayoutSpacing>
    )
}
