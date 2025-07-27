import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import {Link} from "react-router-dom"
import { DealsContext } from '../context/DealsContext';

const storeLogos = {
    amazon: <img className="w-full h-full object-cover" src={assets.amazon_icon} alt="Amazon" />, // Replace with actual paths
    flipkart: <img className="w-full h-full object-cover" src={assets.flipkart_icon} alt="Flipkart" />,
    myntra: <img className="w-full h-full object-cover" src={assets.myntra_icon} alt="Myntra" />,
    ajio: <img className="w-full h-full object-cover" src={assets.ajio_icon} alt="Ajio" />,
    other: <span className="text-xl font-bold text-gray-500">Deal</span>
};




const DealCard = ({ deal }) => {

    const {getDuration } = useContext(DealsContext);
 
    const handleGrabDealClick = (e) => {
        e.stopPropagation();
        e.preventDefault();  
        window.open(deal.url, '_blank', 'noopener,noreferrer');
    }

    return (
        <Link to={`deals/${deal._id}`} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
            <div className="relative">
                {deal.imagePath ? (
                    // If an image URL exists, display it
                    <img className="w-full h-56 object-cover" src={deal.imagePath} alt={deal.title} />
                ) : (
                    // Otherwise, display a placeholder
                        <div className="w-full h-56 flex items-center justify-center bg-gray-200 overflow-hidden">
                            <div className='w-full h-full'>
                                {/* This renders the correct store logo component */}
                                {storeLogos[deal.source]}
                            </div>
                        </div>
                )}
                {deal.discount && (
                        <div className="absolute top-0 left-0 bg-red-500 text-white font-bold text-lg p-2 rounded-br-xl">
                            {deal.discount}% OFF
                        </div>
                    )
                }
                
                {deal.isLoot && (
                    <div className="absolute top-0 right-0 bg-yellow-400 text-black font-bold text-xs p-2 rounded-bl-xl flex items-center">
                        <img className='h-3'  src={assets.flash_icon} /> LOOT
                    </div>
                )}
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    {deal.source.charAt(0).toUpperCase() + deal.source.slice(1)}
                    <span className="text-xs text-gray-500">{getDuration(deal.createdAt)}</span>
                </div>
                <h3 className="text-md font-semibold text-gray-900 truncate group-hover:text-indigo-600">{deal.title}</h3>
                <button onClick={handleGrabDealClick} className="block w-full text-center bg-indigo-600 text-white font-bold py-3 rounded-lg mt-4 hover:bg-indigo-700">
                    Grab Deal
                </button>
            </div>
        </Link>
    );
}

export default DealCard
