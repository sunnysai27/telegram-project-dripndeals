import React from 'react'
import { assets } from '../assets/assets'

const OurMission = () => {
  return (
    <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Mission</h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Democratizing Deal Discovery
                </p>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                    Our goal is to level the playing field. We provide a real-time, centralized platform where every "loot" and price-drop from major Indian e-commerce sites is instantly available to you. No more endless searching, no more missed opportunities.
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="p-6 bg-white rounded-xl shadow-md">
                    <img  className='w-10 h-10 mx-auto' src={assets.eye_icon} alt="eye icon" />
                    <h3 className="mt-4 text-xl font-bold">24/7 Monitoring</h3>
                    <p className="mt-2 text-gray-600">Our systems are always active, scanning for deals posted on our source Telegram channel.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-md">
                    <img className='w-10 h-10 mx-auto' src={assets.flash_icon} alt="eye icon" />
                    <h3 className="mt-4 text-xl font-bold">Instantaneous Alerts</h3>
                    <p className="mt-2 text-gray-600">Using real-time technology, deals appear on our site the second they're found.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-md">
                    <img  className='w-10 h-10 mx-auto' src={assets.community_icon} alt="eye icon" />
                    <h3 className="mt-4 text-xl font-bold">Community-Powered</h3>
                    <p className="mt-2 text-gray-600">Our strength comes from our Telegram community, a passionate group of deal-hunters.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurMission
