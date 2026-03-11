export default function OtherNeedsInput() {
    return (
        <div className='w-full flex flex-col gap-3'>
            <h1 className='text-[16px] font-semibold'>Select your main business needs</h1>
            <div className='w-full flex flex-col gap-2'>
                <textarea
                    name="other-needs" id="other-needs"
                    placeholder='Input keluhan kesehatanmu.......'
                    className='p-3 resize-none border border-gray-300 rounded-md h-40'
                />
                <p className='text-[14px] text-gray-500'>Max 500 words.</p>
            </div>
        </div>
    );
}
