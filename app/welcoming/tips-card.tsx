import React from 'react'
import { FaTractor } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function TipsCard() {
    return (
        <div className="bg-[#B9E5FF] w-full p-4 rounded-md flex justify-between items-center">
            <div className="flex items-start gap-2">
                <div className="p-2 bg-white rounded-md flex justify-center items-center">
                    <FaTractor className="fill-[#005D85] w-6 h-6" />
                </div>
                <div className="flex flex-col">
                    <h1 className="font-semibold text-[13px] text-gray-600">This Morning Tips</h1>
                    <p className="text-[11px] text-gray-500">Make sure the sprayer is clean before 7 am and 10 PM</p>
                </div>
            </div>
            <FaChevronRight />
        </div>
    )
}
