import ScreenLayout from '../layouts/screen-layout';
import OpportunityHeader from './opportunity-header';

import { IoMdCloudDone } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";

import { FaCheck } from "react-icons/fa";

import OpportunityCard from './opportunity-card';
import OfflineSafeBadge from './offline-safe-badge';


function OpportunityPage() {
  return (
    <ScreenLayout>
      <div className='w-full pb-8'>

        <OpportunityHeader />

        <div className='py-2 bg-white px-5'>

          {/* offline safe badge */}
          <OfflineSafeBadge />
          {/* offline safe badge */}

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

          <div className='w-full h-35.5 flex justify-between items-center pt-5 gap-2'>
            <div className='w-full h-full p-3 rounded-md space-y-5 shadow-xl border border-gray-300'>
              <h2 className='text-[14px] font-medium'>Last Submissions</h2>
              <div className='space-y-2'>
                <div className='text-[#2B9637] flex items-center gap-1 bg-[#D3F4D7] rounded-md p-1.5'>
                  <FaCheck className='fill-[#2B9637] w-3 h-3' />
                  <p className='text-[10px]'>Proceed</p>
                </div>
                <div className='text-[#2B9637] flex items-center gap-1 p-1 rounded-md border border-gray-400'>
                  <FaCheck className='fill-[#2B9637] w-3 h-3' />
                  <p className='text-[10px] font-semibold text-black'>2 Data Ready to Send</p>
                </div>
              </div>
            </div>
            <div className='w-full h-full p-3 rounded-md shadow-xl border border-gray-300'>
              <h2 className='text-[14px] font-medium'>Total Submissions</h2>
              <p className='text-[34px] font-medium'>45</p>
              <p className='text-[#43A047] text-[14px]'>+11% of target</p>
            </div>
          </div>

          <div className='w-full pt-5 flex flex-col gap-2'>
            <p className='text-[16px]'>
              Ada 3 <span className='font-semibold'>peluang baru</span> untuk Anda
            </p>

            <div className='w-full space-y-3'>
              <OpportunityCard />
              <OpportunityCard />
              <OpportunityCard />
            </div>

          </div>

        </div>
      </div>
    </ScreenLayout>
  );
}

export default OpportunityPage;
