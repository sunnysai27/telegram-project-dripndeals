import React, { useState, useEffect } from 'react';

// --- ICONS (Self-contained SVGs) ---
const AmazonLogo = () => <img src="https://placehold.co/100x40/ffffff/000000?text=Amazon&font=roboto" alt="Amazon" className="h-6" />;
const FlipkartLogo = () => <img src="https://placehold.co/100x40/2874f0/ffffff?text=Flipkart&font=roboto" alt="Flipkart" className="h-6" />;
const MyntraLogo = () => <img src="https://placehold.co/100x40/f03b69/ffffff?text=Myntra&font=roboto" alt="Myntra" className="h-6" />;
const AjioLogo = () => <img src="https://placehold.co/100x40/000000/ffffff?text=AJIO&font=roboto" alt="Ajio" className="h-6" />;

const TelegramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.17.9-.502 1.22-1.012 1.254-1.033.068-1.555-.63-2.42-1.162-1.39-1.123-2.162-1.803-3.48-2.824-.465-.359-1.023-.69-1.023-1.417 0-.55.38-1.012.93-1.543.43-.417 4.52-4.105 4.688-4.448.02-.043.04-.15-.05-.22-.09-.07-.203-.04-.314-.02-.13.027-2.323 1.464-3.29 2.22-.44.345-.83.49-1.2.49-.417 0-.962-.13-1.464-.38-1.033-.51-1.574-.75-1.45-1.42.03-.18.21-.36.42-.52 1.02-1.03 2.53-1.69 4.36-2.28 1.45-.46 2.7-.22 3.28.25z"/>
    </svg>
);

const LightningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
    </svg>
);


// --- MOCK DATA (This will be replaced by Socket.IO data) ---
const mockDeals = [
    { id: 1, title: 'Men\'s Running Shoes', oldPrice: 3999, newPrice: 799, store: 'amazon', imageUrl: 'https://placehold.co/400x400/f07171/ffffff?text=Shoes', isLoot: true, timestamp: '2m ago' },
    { id: 2, title: '4K Smart Android TV 55"', oldPrice: 65000, newPrice: 28999, store: 'flipkart', imageUrl: 'https://placehold.co/400x400/61aeee/ffffff?text=TV', isLoot: false, timestamp: '5m ago' },
    { id: 3, title: 'Designer Kurta Set', oldPrice: 4500, newPrice: 1299, store: 'myntra', imageUrl: 'https://placehold.co/400x400/c3e88d/ffffff?text=Kurta', isLoot: false, timestamp: '10m ago' },
    { id: 4, title: 'Noise Cancelling Headphones', oldPrice: 19999, newPrice: 8999, store: 'amazon', imageUrl: 'https://placehold.co/400x400/fca670/ffffff?text=Headphones', isLoot: false, timestamp: '12m ago' },
    { id: 5, title: 'Levi\'s Slim Fit Jeans', oldPrice: 3599, newPrice: 999, store: 'ajio', imageUrl: 'https://placehold.co/400x400/89ddff/ffffff?text=Jeans', isLoot: true, timestamp: '15m ago' },
    { id: 6, title: '10,000mAh Power Bank', oldPrice: 1999, newPrice: 499, store: 'flipkart', imageUrl: 'https://placehold.co/400x400/c792ea/ffffff?text=Power+Bank', isLoot: true, timestamp: '22m ago' },
    { id: 7, title: 'Women\'s Handbag', oldPrice: 2999, newPrice: 749, store: 'myntra', imageUrl: 'https://placehold.co/400x400/ffcb6b/ffffff?text=Handbag', isLoot: false, timestamp: '28m ago' },
    { id: 8, title: 'Smartwatch with AMOLED', oldPrice: 8999, newPrice: 2499, store: 'amazon', imageUrl: 'https://placehold.co/400x400/f78c6c/ffffff?text=Watch', isLoot: false, timestamp: '35m ago' },
];

const storeLogos = {
    amazon: <AmazonLogo />,
    flipkart: <FlipkartLogo />,
    myntra: <MyntraLogo />,
    ajio: <AjioLogo />,
};

// --- COMPONENTS ---

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

const Header = () => (
    <header className="bg-white shadow-md sticky top-[36px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
                <div className="text-2xl font-extrabold text-gray-800">
                    <a href="#">Deal<span className="text-indigo-600">Flow</span></a>
                </div>
                <a href="#telegram-cta" className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                    Join Telegram
                </a>
            </div>
        </div>
    </header>
);

const DealCard = ({ deal }) => {
    const discount = Math.round(((deal.oldPrice - deal.newPrice) / deal.oldPrice) * 100);
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
            <div className="relative">
                <img className="w-full h-56 object-cover" src={deal.imageUrl} alt={deal.title} />
                <div className="absolute top-0 left-0 bg-red-500 text-white font-bold text-lg p-2 rounded-br-xl">
                    {discount}% OFF
                </div>
                {deal.isLoot && (
                    <div className="absolute top-0 right-0 bg-yellow-400 text-black font-bold text-xs p-2 rounded-bl-xl flex items-center">
                        <LightningIcon /> LOOT
                    </div>
                )}
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    {storeLogos[deal.store]}
                    <span className="text-xs text-gray-500">{deal.timestamp}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 truncate group-hover:text-indigo-600">{deal.title}</h3>
                <div className="flex items-center mt-2 space-x-2">
                    <p className="text-2xl font-bold text-gray-800">₹{deal.newPrice.toLocaleString('en-IN')}</p>
                    <p className="text-md text-gray-500 line-through">₹{deal.oldPrice.toLocaleString('en-IN')}</p>
                </div>
                <a href="#" className="block w-full text-center bg-indigo-600 text-white font-bold py-3 rounded-lg mt-4 hover:bg-indigo-700 transition-colors">
                    Grab Deal
                </a>
            </div>
        </div>
    );
};

const Reference = () => {
    const [deals, setDeals] = useState([]);
    const [filteredDeals, setFilteredDeals] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data
        // In a real app, you would connect to Socket.IO here
        setTimeout(() => {
            setDeals(mockDeals);
            setFilteredDeals(mockDeals);
            setLoading(false);
        }, 1500);
    }, []);

    const handleFilter = (store) => {
        setActiveFilter(store);
        if (store === 'all') {
            setFilteredDeals(deals);
        } else {
            setFilteredDeals(deals.filter(deal => deal.store === store));
        }
    };

    const filterOptions = ['all', 'amazon', 'flipkart', 'myntra', 'ajio'];

    return (
        <div className="bg-gray-100 font-sans">
            <LiveDealTicker />
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* --- Hero Section --- */}
                <section className="text-center py-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        The Hottest Deals from Telegram, <span className="text-indigo-600">Instantly.</span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Never miss a loot again. We bring you the best deals from your favorite stores in real-time.
                    </p>
                </section>

                {/* --- Filter Bar --- */}
                <section className="mb-8 p-2 bg-white rounded-xl shadow-sm sticky top-[100px] z-30">
                    <div className="flex justify-center items-center space-x-2 sm:space-x-4">
                        {filterOptions.map(store => (
                            <button
                                key={store}
                                onClick={() => handleFilter(store)}
                                className={`px-3 py-2 sm:px-6 sm:py-2 text-sm sm:text-base font-bold rounded-lg transition-all duration-300
                                    ${activeFilter === store ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'}`}
                            >
                                {store.charAt(0).toUpperCase() + store.slice(1)}
                            </button>
                        ))}
                    </div>
                </section>

                {/* --- Deals Grid --- */}
                <section>
                    {loading ? (
                         <div className="text-center py-10">
                            <p className="text-lg font-semibold text-gray-600">Loading Latest Deals...</p>
                         </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredDeals.map(deal => (
                                <DealCard key={deal.id} deal={deal} />
                            ))}
                        </div>
                    )}
                </section>

                {/* --- How It Works --- */}
                <section className="bg-white rounded-xl shadow-sm my-16 py-12 px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Simple, Fast, and Effective</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="bg-indigo-100 text-indigo-600 rounded-full h-16 w-16 flex items-center justify-center mx-auto text-2xl font-bold">1</div>
                            <h3 className="mt-4 text-xl font-bold">We Monitor Deals</h3>
                            <p className="mt-2 text-gray-600">Our system watches the Telegram channel 24/7 for new deals.</p>
                        </div>
                        <div>
                            <div className="bg-indigo-100 text-indigo-600 rounded-full h-16 w-16 flex items-center justify-center mx-auto text-2xl font-bold">2</div>
                            <h3 className="mt-4 text-xl font-bold">They Appear Here Instantly</h3>
                            <p className="mt-2 text-gray-600">Using real-time tech, deals are posted here the moment they're live.</p>
                        </div>
                        <div>
                            <div className="bg-indigo-100 text-indigo-600 rounded-full h-16 w-16 flex items-center justify-center mx-auto text-2xl font-bold">3</div>
                            <h3 className="mt-4 text-xl font-bold">You Click & Save</h3>
                            <p className="mt-2 text-gray-600">You see the deal, click "Grab Deal", and buy it before it's gone.</p>
                        </div>
                    </div>
                </section>

                {/* --- Telegram CTA --- */}
                <section id="telegram-cta" className="bg-indigo-700 rounded-xl shadow-lg my-16 py-16 px-8 text-center">
                    <TelegramIcon className="text-white mx-auto mb-4" />
                    <h2 className="text-3xl font-extrabold text-white">Join the Community</h2>
                    <p className="mt-3 max-w-xl mx-auto text-lg text-indigo-100">
                        Be the first to know. Join our Telegram channel for instant notifications and never miss a loot!
                    </p>
                    <a href="#" className="mt-8 inline-block bg-white text-indigo-600 font-bold text-lg py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                        Join 50,000+ Members
                    </a>
                </section>
            </main>
        </div>
    );
};

export default Reference;
