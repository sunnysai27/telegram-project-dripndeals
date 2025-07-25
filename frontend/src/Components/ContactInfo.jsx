import React from 'react'
import { assets } from '../assets/assets'

const ContactInfo = () => {
  return (
    <div className="mt-5">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6 text-gray-600">
                <div className="flex items-start">
                    <img src={assets.location_icon} className="flex-shrink-0 h-6 w-6 text-indigo-500" />
                    <span className="ml-3">Hyderabad, Telangana, India</span>
                </div>
                <div className="flex items-start">
                    <img src={assets.phone_icon} className="flex-shrink-0 h-6 w-6 text-indigo-500" />
                    <span className="ml-3">+91 (123) 456-7890</span>
                </div>
                <div className="flex items-start">
                    <img src={assets.mail_icon} className="flex-shrink-0 h-6 w-6 text-indigo-500" />
                    <span className="ml-3">sunnyveerabathini4@gmail.com</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactInfo
