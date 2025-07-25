import React from 'react'
import { assets } from '../assets/assets.js'
import { useContext } from 'react';
import { DealsContext } from '../context/DealsContext.jsx';


const JoinTelegram = () => {
    const { telegramChannelUrl } = useContext(DealsContext);
  return (
    <section id="telegram-cta" className="bg-indigo-700 rounded-xl shadow-lg my-16 py-16 px-8 text-center">
        <img className="text-white mx-auto mb-4 rounded-full h-16 w-16" src={assets.telegram_icon} alt="Telegram Icon" />
        <h2 className="text-3xl font-extrabold text-white">Join the Community</h2>
        <p className="mt-3 max-w-xl mx-auto text-lg text-indigo-100">
            Be the first to know. Join our Telegram channel for instant notifications and never miss a loot!
        </p>
        <a href={telegramChannelUrl} className="mt-8 inline-block bg-white text-indigo-600 font-bold text-lg py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
            Join 50,000+ Members
        </a>
    </section>
  )
}

export default JoinTelegram;
