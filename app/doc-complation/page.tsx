import React from 'react';
import ScreenLayout from '../layouts/screen-layout';
import DocComplationHeader from './doc-complation-header';

import { FaMicrophone } from "react-icons/fa";
import DocComplationCard from './doc-complation-card';


function DocComplationPage() {
  return (
    <ScreenLayout>
      <div className='w-full pb-8'>
        <DocComplationHeader />
        <div className='px-5 pt-2 space-y-6'>

          <button
            className='p-2 w-[50%] flex justify-center items-center gap-2 max-w-100 bg-[#004868] text-white rounded-md'
          >
            <p className='text-[14px]'>Use Voiceover</p>
            <FaMicrophone className='w-3 h-3' />
          </button>

          <div className='w-full flex flex-col gap-5'>
            <DocComplationCard />
            <DocComplationCard />
          </div>

          <p className='w-full text-justify text-[14px]'>
            If you <span className='font-semibold'>have not registered or created an insurance card</span> or policy, click the button below to see the insurance card creation guide.
          </p>
        </div>
      </div>
    </ScreenLayout>
  );
}

export default DocComplationPage;
