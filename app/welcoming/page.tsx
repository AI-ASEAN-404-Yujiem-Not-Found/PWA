import Link from 'next/link'
import BottomNavigation from '../components/bottom-navigation'
import HeaderOnly from '../components/header-only'
import LayoutSpacing from '../components/layout-spacing'
import OpportunityCard from './opportunity-card'
import TipsCard from './tips-card'

function WelcomingPage() {
    return (
        <LayoutSpacing>
            <HeaderOnly name='Andi' />
            <div className='w-full pb-8'>
                <div className='py-5 bg-white px-8'>
                    <div className='w-full flex justify-between items-end'>
                        <h1 className='text-[20px]'><span className='font-semibold'>Opportunity</span> for you</h1>
                        <Link href={'/opportunity'} className='text-[11px] font-semibold'>See all</Link>
                    </div>

                    <div className='w-full flex flex-col gap-5 pt-5'>
                        <OpportunityCard />
                    </div>

                    <div className='w-full flex flex-col gap-5 pt-5'>
                        <TipsCard />
                    </div>
                </div>
            </div>
            <BottomNavigation />
        </LayoutSpacing>
    )
}

export default WelcomingPage