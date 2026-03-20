'use client'

import React from 'react';

export default function ChanceFormRadio({content}: {content: string}) {
    const [isChecked, setIsChecked] = React.useState(false);

    return (
        <div className='p-5 rounded-xl border border-gray-300 flex items-center justify-between'>
            <p className='font-semibold'>{content}</p>
            <input
                type="radio" name="input_key" id="input_key"
                className='w-5 h-5'
                value={Number(isChecked)}
                onClick={() => setIsChecked(!isChecked)}
            />
        </div>
    );
}
