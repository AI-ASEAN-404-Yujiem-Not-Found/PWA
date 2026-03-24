'use client'

import React, { useState } from 'react'
import { FiChevronDown, FiMic } from 'react-icons/fi'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import LayoutSpacing from '../components/layout-spacing'
import HeaderBack from '../components/header-back'
import BottomNavigation from '../components/bottom-navigation'
import { UploadBox } from './upload'
import { Input } from './input'
import { Select } from './select'
import Link from 'next/link'

export default function DocComplationPage() {
  const [selectedNeed, setSelectedNeed] = useState('Business expansion')
  const [openDropdown, setOpenDropdown] = useState(false)

  const needs = [
    'Daily business capital',
    'Business expansion',
    'Purchase of equipment/materials',
    'Other business needs',
  ]

  return (
    <LayoutSpacing>
      <HeaderBack title={`Let's complete the documents`} />

      <div className="space-y-6 pb-24 px-8 pt-5">

        {/* Voice Over */}
        <button className="flex items-center gap-2 bg-[#004EEB] text-white px-4 py-2 rounded-lg w-fit">
          Use Voiceover <FiMic />
        </button>

        <UploadBox title="Scan/Upload identity card" />

        {/* Upload Business Doc */}
        <UploadBox title="Business Information Document" />

        {/* Guide */}
        <div className="text-sm text-gray-600">
          If you <b>have not registered or created an insurance card</b> or policy, click the button below to see the insurance card creation guide.
        </div>

        <button className="flex justify-between items-center bg-[#004EEB] text-white px-4 py-3 rounded-lg w-full">
          Document Creation Guide
          <MdOutlineKeyboardArrowRight size={20} />
        </button>

        {/* Phone Number */}
        <Input label="Phone Number" placeholder="+62 (555) 000-0000" />

        {/* Account Type */}
        <Select label="Account Type" />

        {/* Account Number */}
        <Input label="Account number" placeholder="Rekening number" />

        {/* Business Needs */}
        <div>
          <label className="text-sm font-medium">Select your main business needs</label>

          <div
            onClick={() => setOpenDropdown(!openDropdown)}
            className="mt-2 border rounded-lg px-3 py-3 flex justify-between items-center cursor-pointer"
          >
            {selectedNeed}
            <FiChevronDown />
          </div>

          {openDropdown && (
            <div className="mt-2 border rounded-lg overflow-hidden shadow">
              {needs.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setSelectedNeed(item)
                    setOpenDropdown(false)
                  }}
                  className={`px-4 py-3 cursor-pointer hover:bg-gray-100 ${
                    selectedNeed === item ? 'bg-gray-100 font-medium' : ''
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Text Area */}
        <div>
          <label className="text-sm font-medium">Any other needs?</label>
          <textarea
            className="mt-2 w-full border rounded-lg p-3 h-28"
            placeholder="Input keluhan kesehatanmu......."
          />
          <p className="text-xs text-gray-400 mt-1">Max 500 words</p>
        </div>

        {/* Button */}
        <Link href={'/growth-center'} className="w-full bg-[#004EEB] text-white py-3 rounded-lg flex justify-center items-center gap-2">
          Continue Process
          <MdOutlineKeyboardArrowRight size={20} />
        </Link>
      </div>

      <BottomNavigation />
    </LayoutSpacing>
  )
}
