import LayoutSpacing from '../components/layout-spacing';
import BottomNavigation from '../components/bottom-navigation';
import HeaderBack from '../components/header-back';
import OflineSTTMicrophone from './ofline-stt-microphone';

function OfflineSTTPage() {

    return (
        <LayoutSpacing>
            <HeaderBack title='Register through story' />
            <div className='w-full pb-8'>

                <div className='py-3 bg-white px-5'>
                    <div className='text-center'>
                        <h1 className='font-semibold text-[20px]'>Tell About Your Needs</h1>
                        <h2 className='text-[13px] text-gray-600'>
                            Cukup ceritakan pengalaman dan kesulitan anda. Kami akan membantu mencatat semuanya
                        </h2>
                    </div>


                    <OflineSTTMicrophone />

                    {/* <div className="w-full flex flex-col justify-center items-center gap-3 text-center pt-15.75">
                        <button className="p-2 w-full max-w-100 bg-[#004868] text-white rounded-md">
                            <Link href={"/welcoming"}>Continue</Link>
                        </button>
                        <p className="text-[12px] text-gray-600">
                            Need help?{' '}
                            <span className='font-semibold text-[#005D85]'>Contact village assistance</span>
                        </p>
                    </div> */}
                </div>
            </div>
            <BottomNavigation />
        </LayoutSpacing>
    )
}

export default OfflineSTTPage;