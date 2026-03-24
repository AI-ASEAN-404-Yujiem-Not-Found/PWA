'use client'

import React from 'react'
import LayoutSpacing from '../components/layout-spacing'
import HeaderOnly from '../components/header-only'
import BottomNavigation from '../components/bottom-navigation'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ProfilePage() {
  return (
    <LayoutSpacing>
      <HeaderOnly name="Profile" />

      <div className="px-6 bg-white min-h-screen text-gray-900 pt-5 pb-20">
        
        <div className="flex flex-col items-center mb-6">
          <div className="h-24 w-24 rounded-full bg-blue-100 text-[#004EEB] flex items-center justify-center text-3xl font-bold">
            AC
          </div>

          <h2 className="mt-4 text-xl font-semibold">Jone Doe</h2>
          <p className="text-sm text-gray-500">jonedoe@email.com</p>

          <button className="mt-4 px-4 py-2 bg-[#004EEB] text-white rounded-md text-sm hover:opacity-90 transition">
            Edit Profile
          </button>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
          
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-[#004EEB]" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-gray-500">alexcinatra@email.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone size={18} className="text-[#004EEB]" />
            <div>
              <p className="text-sm font-medium">Phone</p>
              <p className="text-sm text-gray-500">+62 812 3456 7890</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-[#004EEB]" />
            <div>
              <p className="text-sm font-medium">Location</p>
              <p className="text-sm text-gray-500">Depok, Indonesia</p>
            </div>
          </div>

        </div>

        <div className="mt-6">
          <button className="w-full border border-[#004EEB] text-[#004EEB] py-2 rounded-md text-sm hover:bg-blue-50 transition">
            Logout
          </button>
        </div>

      </div>

      <BottomNavigation />
    </LayoutSpacing>
  )
}