'use client'
import GrowthCenterResultHeader from './growth-center-result-header';

import { FaTractor } from "react-icons/fa";
import ApprovalGauge from './approval-gauge';

import { RiSparkling2Fill } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";
import { IoIosDocument } from "react-icons/io";
import useIsMobile from '../hook/isMobile';
import DesktopNoPreview from '../components/desktop-no-preview';


function GrowthCenterResultPage() {
  const isMobile = useIsMobile();

  if (!isMobile) return <DesktopNoPreview />;

  return (
    <div className='w-full pb-8'>
      <GrowthCenterResultHeader />

      <div className='px-5 pt-2 pb-6 space-y-6'>
        <div className='w-full flex gap-4 items-center justify-between px-3 py-2 bg-[#F7E5DE] border border-[#F3C1AB] rounded-xl shadow-md'>
          <div className='p-2 bg-orange-600 rounded-xl'>
            <FaTractor className='w-7.5 h-7.5 fill-white' />
          </div>
          <div className='w-full'>
            <h2 className='text-[14px] font-semibold text-orange-500'>Simulation Mode: Data won&apos;t be sent</h2>
            <p className='text-[13px] font-normal'>You are in the safe testing mode . Exploration without risk.</p>
          </div>
        </div>

        <ApprovalGauge value={0.784} />

        <div className='w-full p-3 flex flex-col gap-3 border border-gray-300 rounded-md'>
          <div className='w-full flex items-center gap-2'>
            <RiSparkling2Fill className='fill-blue-700' />
            <h1 className='text-[15px] font-semibold'>Mahesa AI Analysis</h1>
          </div>
          <div className='w-full text-[13px]'>
            <p>Based of your local profile this time, your data suited</p>
            <p>for 92% standard kriteria that&apos;s needed. data suited</p>
            <p>for 92% standard kriteria that&apos;s needed.</p>
          </div>
          <div className='p-4 rounded-md bg-[#D4DFFF] text-[12px] text-gray-600 font-semibold'>
            &quot;If you want to send it now, the possibility of approval is high. Make sure all the documents already read carefully and clearly&quot;
          </div>
        </div>

        <div className='w-full p-3 flex flex-col gap-3 border border-gray-300 rounded-md'>
          <h2 className='text-[16px] font-semibold text-gray-600'>Local Data Summary </h2>
          <div className='w-full flex flex-col gap-3'>

            <div className='w-full flex items-center justify-between border border-gray-300 rounded-md p-3'>
              <div className='w-full flex items-center gap-2'>
                <MdOutlineAccountCircle className='w-5 h-5' />
                <p className='font-semibold text-[14px]'>Self Identity</p>
              </div>
              <FaCheck />
            </div>

            <div className='w-full flex items-center justify-between border border-gray-300 rounded-md p-3'>
              <div className='w-full flex items-center gap-2'>
                <PiBagFill className='w-5 h-5' />
                <p className='font-semibold text-[14px]'>Employment</p>
              </div>
              <FaCheck />
            </div>

            <div className='w-full flex items-center justify-between border border-gray-300 rounded-md p-3'>
              <div className='w-full flex items-center gap-2'>
                <IoIosDocument className='w-5 h-5' />
                <p className='font-semibold text-[14px]'>Documents</p>
              </div>
              <FaCheck />
            </div>
          </div>
        </div>

        <div className='w-full p-3 flex items-center justify-between gap-3'>
          <button className='w-full rounded-md p-2 text-[14px] bg-gray-300'>Change Data</button>
          <button className='w-full rounded-md p-2 text-[14px] bg-[#005D85] text-white'>Claim Now</button>
        </div>
      </div>
    </div>
  );
}

export default GrowthCenterResultPage;
