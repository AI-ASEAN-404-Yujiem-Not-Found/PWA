import React from 'react';
import ScreenLayout from '../layouts/screen-layout';
import TellYourNeedHeader from './tell-your-need-header';

import { PiMicrophoneFill } from "react-icons/pi";

function TellYourNeedPage() {
  return (
    <ScreenLayout>
      <div className='w-full pb-8'>

        <TellYourNeedHeader />

        <div className='py-3 bg-white px-5'>

          <div className='text-center'>
            <h1 className='font-semibold text-[20px]'>Tell About Your Needs </h1>
            <h2 className='text-[13px] text-gray-600'>Cukup ceritakan pengalaman dan kesulitan anda. Kami akan membantu mencatat semuanya</h2>
          </div>


          <div className='w-full h-85.5 flex flex-col justify-center items-center gap-10'>
            <div className='w-37.25 h-37.25 rounded-full flex justify-center items-center bg-[#E4F5FF]'>
              <div className='w-27.5 h-27.5 rounded-full flex justify-center items-center bg-[#B2E3FF]'>
                <PiMicrophoneFill className='w-17.5 h-17.5' />
              </div>
            </div>

            <div className='text-center w-full'>
              <p className='text-[16px] font-semibold text-[#003A53]'>Touch to Speak</p>
              <p className='text-[#625B71] text-[13px]'>&quot;I have a bamboo craft business with a target market...&quot;</p>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center gap-3 text-center pt-15.75">
              <button className="p-2 w-full max-w-100 bg-[#004868] text-white rounded-md">Continue</button>
              <p className="text-[12px] text-gray-600">Need help ? <span className='font-semibold text-[#005D85]'>Contact village assistance</span></p>
            </div>

        </div>
      </div>
    </ScreenLayout>
  );
}

export default TellYourNeedPage;
