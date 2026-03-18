import React from 'react';
import Image from 'next/image';
import { HiSparkles } from "react-icons/hi2";
import Link from 'next/link';


export default function OpportunityCard() {
  return (
    <div className='rounded-xl bg-gray-50 w-full'>
            <Image src={'/opportinity-placeholder.png'} width={360} height={182} alt='opportinity placeholder' />

            <div className='w-full px-2 py-4 flex flex-col'>
                <div className='w-full flex items-center gap-2 pb-3'>
                    <HiSparkles className='fill-[#0247FE] w-4 h-4' />
                    <h2 className='text-[13px]'>Allign with your schedule</h2>
                </div>

                <div className='w-full text-[13px]'>
                    <p>Based of your local profile this time, your data suited</p>
                    <p>for 92% standard kriteria that&apos;s needed. data suited</p>
                    <p>for 92% standard kriteria that&apos;s needed.</p>
                </div>

                <div className='w-full flex items-center justify-between gap-4 pt-5'>
                    <button className='bg-gray-300 w-full p-2 rounded-md'>Listen</button>
                    <button className='bg-[#004868] w-full text-white p-2 rounded-md'>
                        <Link href={"/chance-form"}>Claim Now</Link>
                    </button>
                </div>
            </div>
        </div>
  )
}

