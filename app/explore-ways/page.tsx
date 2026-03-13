import ScreenLayout from '../layouts/screen-layout';
import { IoMdCloudDone, IoMdMenu } from 'react-icons/io';
import {FaChevronDown } from 'react-icons/fa6';
import { FaTractor } from 'react-icons/fa';
import ExploreWaysHeader from './explore-ways-header';

function ExploreWaysPage() {
  return (
    <ScreenLayout>
      <div className='w-full pb-8'>

        <ExploreWaysHeader />

        <div className='py-2 bg-white px-5'>

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

          <div className='w-full flex-col flex justify-between items-center pt-5 gap-2'>
            <div className='w-full text-left px-3'>
              <h1 className='text-[20px] font-semibold'>Your Exploration Steps Options</h1>
              <p className='text-[13px] text-gray-600 text-justify'>Choose your first step to start building trust and your credit scoring</p>
            </div>

            <div className='w-full flex flex-col gap-2 py-5'>

              <div className='w-full flex flex-col gap-4 rounded-xl border border-gray-300 p-3'>
                <div className='w-full flex items-start gap-2'>

                  <div className="p-2 bg-[#31B5FF] rounded-md flex justify-center items-center">
                    <FaTractor className="fill-[#005D85] w-6 h-6" />
                  </div>

                  <div className='w-full flex flex-col gap-0.5'>
                    <div className='w-full flex items-center justify-between'>
                      <p className='text-[14px] font-semibold'>Gradual Savings Program</p>
                      <p className='p-1 bg-green-200 rounded-md text-[10px] text-green-600'>Easy</p>
                    </div>
                    <div className='text-[13px]'>Based on your data, there are other, more appropriate pathways for you.appropriate pathways for you.</div>
                  </div>
                </div>
                <div className='w-full flex justify-end items-end'>
                  <button className='text-white p-2 rounded-md bg-[#005D85] text-[12px] px-5'>Start Now</button>
                </div>
              </div>

              <div className='w-full flex flex-col gap-4 rounded-xl border border-gray-300 p-3'>
                <div className='w-full flex items-start gap-2'>

                  <div className="p-2 bg-[#31B5FF] rounded-md flex justify-center items-center">
                    <FaTractor className="fill-[#005D85] w-6 h-6" />
                  </div>

                  <div className='w-full flex flex-col gap-0.5'>
                    <div className='w-full flex items-center justify-between'>
                      <p className='text-[14px] font-semibold'>Gradual Savings Program</p>
                      <p className='p-1 bg-green-200 rounded-md text-[10px] text-green-600'>Easy</p>
                    </div>
                    <div className='text-[13px]'>Based on your data, there are other, more appropriate pathways for you.appropriate pathways for you.</div>
                  </div>
                </div>
                <div className='w-full flex justify-end items-end'>
                  <button className='text-white p-2 rounded-md bg-[#005D85] text-[12px] px-5'>Start Now</button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </ScreenLayout>
  );
}

export default ExploreWaysPage;
