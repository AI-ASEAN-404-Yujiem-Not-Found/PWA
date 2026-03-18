import React from 'react'

export default function LayoutSpacing({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full min-h-screen xl:pl-[20vw]">
            <div className='w-full min-h-screen'>
                {children}
            </div>
        </div>
    )
}
