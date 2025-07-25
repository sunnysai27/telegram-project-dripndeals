import React from 'react'

const LiveDealTicker = () => {
    const tickerDeals = "🔥 80% Off Running Shoes on Amazon! 🔥 55-inch 4K TV under 30k on Flipkart! 🔥 Designer Kurtas 70% off on Myntra! ";
    return (
        <div className="bg-yellow-400 text-black py-2 overflow-hidden sticky top-0 z-50">
            <div className="animate-marquee whitespace-nowrap">
                <span className="font-bold text-sm">{tickerDeals}{tickerDeals}</span>
            </div>
        </div>
    );
};


export default LiveDealTicker
