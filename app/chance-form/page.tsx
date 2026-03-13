import Link from 'next/link';
import ScreenLayout from '../layouts/screen-layout';
import ChanceFormHeader from './chance-form-header';
import ChanceFormProgress from './chance-form-progress';
import ChanceFormRadio from './chance-form-radio';
import { CiMicrophoneOn } from "react-icons/ci";

function ChanceFormPage() {
  return (
    <ScreenLayout>
      <div className='w-full pb-8'>
        <ChanceFormHeader />

        <div className='px-5 pt-2'>
          <ChanceFormProgress />

          <div className='text-center pt-4 pb-6'>
            <h1 className='text-[20px] font-semibold'>
              How many cows do you have?
            </h1>
            <p className='text-[13px]'>Select one according to your current ownership</p>
          </div>

          <div className='w-full space-y-3 pt-5'>
            <ChanceFormRadio content='1 - 3 Tails' />
            <ChanceFormRadio content='4 - 10 Tails' />
            <ChanceFormRadio content='>10 Tails' />
          </div>

          <div className='w-full flex flex-col gap-3 py-5'>
            <button
              className='p-3 w-full flex justify-center items-center gap-2 max-w-100 bg-[#004868] text-white rounded-md'
            >
              <CiMicrophoneOn className='w-4 h-4' />
              <p className='text-[14px]'>Answer with Voiceover</p>
            </button>
            <button
              className='p-3 w-full max-w-100 text-[#004868] border-2 border-[#004868] border-dashed rounded-md'
            >
              <Link href={"/growth-center-result"} className='text-[14px]'>Try It First</Link>
            </button>
          </div>

        </div>

      </div>
    </ScreenLayout>
  );
}

export default ChanceFormPage;
