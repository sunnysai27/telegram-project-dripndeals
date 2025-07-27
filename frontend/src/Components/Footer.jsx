import React from 'react'
import { assets } from '../assets/assets';
import { useContext } from 'react';
import { DealsContext } from '../context/DealsContext';
import { Link } from 'react-router-dom';

const Footer = () => {

    const {telegramChannelUrl} = useContext(DealsContext);

  return (
      <footer className="bg-gray-800 text-gray-300">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
              <div className="md:flex md:items-center md:justify-between">
                  <div className="flex justify-center space-x-6 md:order-2">
                      <a href={telegramChannelUrl} className="text-gray-400 hover:text-white">
                          <img className='rounded-full h-16 w-16 ' src={assets.telegram_icon} />
                      </a>
                      <a href="mailto:sunnyveerabathini4@gmail.com" className="text-gray-400 hover:text-white">
                          <img className='rounded-full h-16 w-16' src={assets.mail_icon} />
                      </a>
                  </div>
                  <div className="mt-8 md:mt-0 md:order-1">
                    <Link to={'/'}>
                        <img className='h-16 w-auto mx-auto' src={assets.drip_white} alt="DripnDeals" />
                    </Link>
                    <p className='text-center text-base text-gray-400'>Made with ❤️</p>
                    <p className="text-center text-base text-gray-400">&copy; {new Date().getFullYear()} DripnDeals. All rights reserved.</p>
                  </div>
              </div>
          </div>
      </footer>
  );
}

export default Footer
