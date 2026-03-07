import OnboardingHeader from './on-boarding-header';
import ScreenLayout from '../layouts/screen-layout';
import OnBoardingCard from './on-boarding-card';
import OnBoardingTipsCard from './on-boarding-tips-card';

function OnBoardingpage() {
  return (
    <ScreenLayout>
      <div className='w-full pb-8'>

        <OnboardingHeader />

        <div className='py-5 bg-white px-8'>

          <div className='w-full flex justify-between items-end'>
            <h1 className='text-[20px]'><span className='font-semibold'>Opportunity</span> for you</h1>
            <p className='text-[11px] font-semibold'>See all</p>
          </div>

          <div className='w-full flex flex-col gap-5 pt-5'>
            <OnBoardingCard />
          </div>

          <div className='w-full flex flex-col gap-5 pt-5'>
            <OnBoardingTipsCard />
            <OnBoardingTipsCard />
            <OnBoardingTipsCard />
          </div>

        </div>

      </div>
    </ScreenLayout>
  );
}

export default OnBoardingpage;
