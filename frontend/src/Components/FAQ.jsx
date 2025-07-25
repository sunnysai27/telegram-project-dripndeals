import React, { useState } from 'react'
import { assets } from '../assets/assets';

const FAQ = ({question , answer}) => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
        <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left py-5">
            <span className="text-lg font-medium text-gray-900">{question}</span>
            <img src={assets.downarrow_icon} className={`w-3 h-3 ${isOpen ? 'transform rotate-180' : '' }`} />
        </button>
        {isOpen && (
            <div className="pb-5 pr-10">
                <p className="text-gray-600">{answer}</p>
            </div>
        )}
    </div>
);
}

export default FAQ
