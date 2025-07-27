import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";



export const DealsContext = createContext();

const backendUrl = import.meta.env.VITE_BACKEND_API;
const telegramChannelUrl = import.meta.env.VITE_TELEGRAM_CHANNEL_URL;

export function DealsContextProvider(props){

    const [deals, setDeals] = useState([]);
    const [activeFilter , setActiveFilter] = useState('all');
    const [filteredDeals , setFilteredDeals] = useState([]);
    const [activePage , setActivePage ] = useState('home');

    
    const filterOptions = ['all', 'amazon', 'flipkart', 'myntra', 'ajio'];

    const getFilteredDeals = async (source) => {
        try {
            const response = await axios.get(`${backendUrl}/api/deals/${source}`);
            console.log(response.data);
            if(response.data.success) {
                setFilteredDeals(response.data.deals);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
        


    }

    const handleFilter = (store) => {
        setActiveFilter(store);
        if (store === 'all') {
            setFilteredDeals(deals);
        } else {
            getFilteredDeals(store);
        }
    };

    const getDuration = (date) => {
        const timestamp = new Date(date).getTime();
        const seconds = Math.floor((Date.now() - timestamp) / 1000);

        if (seconds < 60) return `${seconds} sec ago`;
        if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
        if (seconds < 86400) return `${Math.floor(seconds / 3600)} hrs ago`;
        return `${Math.floor(seconds / 86400)} days ago`;
    };



    const value = {
        deals, setDeals,
        filterOptions, handleFilter , activeFilter, setActiveFilter, filteredDeals, setFilteredDeals,
        activePage, setActivePage, backendUrl, telegramChannelUrl, getDuration,

    };

    return (
        <DealsContext.Provider value={value} >{props.children}</DealsContext.Provider>
    )
}