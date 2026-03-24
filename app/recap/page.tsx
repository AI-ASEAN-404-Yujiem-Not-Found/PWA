'use client'

import React from 'react'
import { DollarSign, Users, CreditCard, Activity } from 'lucide-react'
import LayoutSpacing from '../components/layout-spacing'
import BottomNavigation from '../components/bottom-navigation'
import HeaderBack from '../components/header-back'

const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    desc: '+20.1% from last month',
    icon: DollarSign,
  },
  {
    title: 'Subscriptions',
    value: '+2350',
    desc: '+180.1% from last month',
    icon: Users,
  },
  {
    title: 'Sales',
    value: '+12,234',
    desc: '+19% from last month',
    icon: CreditCard,
  },
  {
    title: 'Active Now',
    value: '+573',
    desc: '+201 since last hour',
    icon: Activity,
  },
]

export default function RecapPage() {
  return (
    <LayoutSpacing>
      <HeaderBack title='Your Recap' />
      <div className="min-h-screen bg-white text-gray-900 p-6">

        <div className="flex gap-2 mb-6">
          {['Overview', 'Analytics', 'Reports', 'Notifications'].map((tab, i) => (
            <button
              key={i}
              className={`px-4 py-1.5 rounded-md text-sm transition ${i === 0
                  ? 'bg-[#004EEB] text-white'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          {stats.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <Icon size={16} className="text-gray-400" />
                </div>

                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-7 gap-4">

          <div className="lg:col-span-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <h2 className="font-semibold mb-4">Overview</h2>

            <div className="h-75 flex items-end gap-2">
              {[40, 20, 60, 30, 50, 25, 70, 45, 55, 35, 65, 30].map(
                (h, i) => (
                  <div
                    key={i}
                    className="w-full rounded-sm"
                    style={{
                      height: `${h}%`,
                      backgroundColor: '#004EEB',
                      opacity: 0.7,
                    }}
                  />
                )
              )}
            </div>
          </div>

          {/* RECENT SALES */}
          <div className="lg:col-span-3 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <h2 className="font-semibold">Recent Sales</h2>
            <p className="text-sm text-gray-500 mb-4">
              You made 265 sales this month.
            </p>

            <div className="space-y-4">
              {[
                ['OM', 'Olivia Martin', 'olivia.martin@email.com', '+$1,999.00'],
                ['JL', 'Jackson Lee', 'jackson.lee@email.com', '+$39.00'],
                ['IN', 'Isabella Nguyen', 'isabella.nguyen@email.com', '+$299.00'],
                ['WK', 'William Kim', 'will@email.com', '+$99.00'],
                ['SD', 'Sofia Davis', 'sofia.davis@email.com', '+$39.00'],
              ].map(([av, name, email, amount], i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">

                    <div className="h-9 w-9 rounded-full bg-blue-100 text-[#004EEB] flex items-center justify-center text-sm font-medium">
                      {av}
                    </div>

                    <div>
                      <p className="text-sm font-medium">{name}</p>
                      <p className="text-xs text-gray-500">{email}</p>
                    </div>
                  </div>

                  <p className="text-sm font-medium">{amount}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <BottomNavigation />

    </LayoutSpacing>
  )
}