import React, { createContext, useState } from "react";



export const DealsContext = createContext();

const backendUrl = import.meta.env.VITE_BACKEND_API;
const telegramChannelUrl = import.meta.env.VITE_TELEGRAM_CHANNEL_URL;

export function DealsContextProvider(props){

    const [deals, setDeals] = useState([]);
    const [activeFilter , setActiveFilter] = useState('all');
    const [filteredDeals , setFilteredDeals] = useState([]);
    const [activePage , setActivePage ] = useState('home');

    
    const filterOptions = ['all', 'amazon', 'flipkart', 'myntra', 'ajio'];

    const handleFilter = (store) => {
        setActiveFilter(store);
        if (store === 'all') {
            setFilteredDeals(deals);
        } else {
            setFilteredDeals(deals.filter(deal => deal.source === store));
        }
    };


    const value = {
        deals, setDeals,
        filterOptions, handleFilter , activeFilter, setActiveFilter, filteredDeals, setFilteredDeals,
        activePage, setActivePage, backendUrl, telegramChannelUrl

    };

    return (
        <DealsContext.Provider value={value} >{props.children}</DealsContext.Provider>
    )
}