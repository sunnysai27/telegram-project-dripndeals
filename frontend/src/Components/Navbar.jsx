import React, { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import { DealsContext } from "../context/DealsContext.jsx";

const Navbar = () => {

    const { telegramChannelUrl } = useContext(DealsContext)
    const [isMenuOpen , setIsMenuOpen] = useState(false);

    const getNavLinkClass = ({ isActive }) => {
        return `font-medium ${isActive ? 'text-indigo-600 font-bold' : 'text-gray-600 hover:text-indigo-600'}`;
    };
    
    const getMobileNavLinkClass = ({ isActive }) => {
        return `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-gray-600 hover:bg-gray-50'}`;
    };
    

  return (

    <header className="bg-white shadow-md sticky top-[36px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">

                <div className="text-2xl font-extrabold text-gray-800">
                    <NavLink to={'/'}>Deal<span className="text-indigo-600">Flow</span></NavLink>
                </div>
                {/* NavItems  */}
                <nav className="hidden md:flex space-x-8">
                    <NavLink to={'/'} className={getNavLinkClass}>Home</NavLink>
                    <NavLink to={'/about'} className={getNavLinkClass}>About Us</NavLink>
                    <NavLink to={'/contact'} className={getNavLinkClass}>Contact</NavLink>
                    
                </nav>
                {/* join telegram buttton */}
                <div className="hidden md:flex items-center">
                    <a href={telegramChannelUrl} target="_blank" className="sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                        Join Telegram
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md">
                        {isMenuOpen ? <img className='h-3' src={assets.close_icon} alt="cross icon" /> : <img className="h-3" src={assets.menu_icon} alt="menu icon" /> }
                    </button>
                </div>
            </div>
        </div>
        {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden pb-4">
                    <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink to={'/'} onClick={() => setIsMenuOpen(false)}  className={getMobileNavLinkClass}>Home</NavLink>
                        <NavLink to={'/about'} onClick={() => setIsMenuOpen(false)} className={getMobileNavLinkClass}>About Us</NavLink>
                        <NavLink to={'/contact'} onClick={() => setIsMenuOpen(false)}className={getMobileNavLinkClass}>Contact</NavLink>
                        <a href={telegramChannelUrl} target="_blank" onClick={() => setIsMenuOpen(false)} className="block w-full text-left mt-2 px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Join Telegram</a>
                    </nav>
                </div>
            )}
    </header>

    
  );
};

export default Navbar;
