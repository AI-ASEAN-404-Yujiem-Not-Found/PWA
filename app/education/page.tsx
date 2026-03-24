'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { FaTractor } from 'react-icons/fa'

import HeaderBack from '../components/header-back'
import LayoutSpacing from '../components/layout-spacing'
import BottomNavigation from '../components/bottom-navigation'

const programs = [
  {
    title: 'Gradual Savings Program',
    level: 'Easy',
    desc: 'Based on your data, there are other, more appropriate pathways for you.',
    href: '/welcoming',
  },
  {
    title: 'Smart Investment Path',
    level: 'Medium',
    desc: 'Build your financial future step by step with guided investment plans.',
    href: '/welcoming',
  },
  {
    title: 'Credit Builder Program',
    level: 'Advanced',
    desc: 'Improve your credit scoring through structured financial activities.',
    href: '/welcoming',
  },
]

export default function EducationPage() {
  return (
    <LayoutSpacing>
      <HeaderBack title="Education" />

      <div className="w-full pb-8 bg-white px-5">
        {/* HEADER */}
        <div className="pt-5 px-1">
          <h1 className="text-[20px] font-semibold text-gray-900">
            Your Exploration Steps Options
          </h1>
          <p className="text-[13px] text-gray-500 mt-1">
            Choose your first step to start building trust and your credit scoring
          </p>
        </div>

        <div className="flex flex-col gap-4 py-5">

          {programs.map((item, i) => (
            <div
              key={i}
              className="w-full rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white"
            >
              <div className="w-full">
                <Image
                  src="/opportinity-placeholder.png"
                  alt="program"
                  width={360}
                  height={182}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="p-4 flex flex-col gap-3">
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-md">
                    <FaTractor className="text-[#004EEB] w-5 h-5" />
                  </div>

                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <p className="text-[14px] font-semibold text-gray-900">
                        {item.title}
                      </p>

                      <span
                        className={`text-[10px] px-2 py-1 rounded-md ${
                          item.level === 'Easy'
                            ? 'bg-green-100 text-green-600'
                            : item.level === 'Medium'
                            ? 'bg-yellow-100 text-yellow-600'
                            : 'bg-red-100 text-red-600'
                        }`}
                      >
                        {item.level}
                      </span>
                    </div>

                    <p className="text-[13px] text-gray-500 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Link
                    href={item.href}
                    className="bg-[#004EEB] text-white text-[12px] px-5 py-2 rounded-md hover:opacity-90 transition"
                  >
                    Start Now
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

      <BottomNavigation />
    </LayoutSpacing>
  )
}