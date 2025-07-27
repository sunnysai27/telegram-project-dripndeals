import React, { useContext } from 'react'
import FilterBar from '../Components/FilterBar'
import { DealsContext } from '../context/DealsContext'
import HowItWorks from '../Components/HowItWorks';
import JoinTelegram from '../Components/JoinTelegram';
import ShimmerUI from '../Components/ShimmerUI';
import DealCard from '../Components/DealCard'
import { useEffect } from 'react';
import { toast } from "react-toastify"
import axios from 'axios';
import {io} from 'socket.io-client';
import { useState } from 'react';
import Pagination from '../Components/Pagination';
 
const Home = () => {

  const [loading, setLoading] = useState(true);
  const {setDeals, filteredDeals,setFilteredDeals, backendUrl } = useContext(DealsContext);
  const [currentPage , setCurrentPage] = useState(1);
  const [totalPages , setTotalPages ] = useState(1);

  const fetchDeals = async (page) => {
    setLoading(true);
      try {
          const response = await axios.get( `${backendUrl}/api/deals/list?page=${page}`);
          // console.log(response.data);
          if(response.data.success) {
              setDeals(response.data.deals);
              setFilteredDeals(response.data.deals);
              setCurrentPage(response.data.pagination.currentPage);
              setTotalPages(response.data.pagination.totalPages);
          } else {
            toast.error(response.data.message);
          }
      } catch (error) {
          console.log(error);
          toast.error(error.message);
      } finally {
        setLoading(false);
      }
  }

  const handlePageChange = (page) =>  {
      fetchDeals(page);
  }

  useEffect(() => {
    fetchDeals(1);

    const socket = io(backendUrl);
    socket.on('connect', () => {
        console.log('Socket connected:', socket.id);
    });
    socket.on('new_deal', (newDeal) => {
        toast.info("✨ New deal arrived!");
        // Update both the main list and the filtered list
        if(currentPage === 1) {
          setDeals(currentDeals => [newDeal, ...currentDeals]);
          setFilteredDeals(currentDeals => [newDeal, ...currentDeals]);
        }
    });
    socket.on('disconnect', () => {
        console.log('Socket disconnected');
    });

    // Clean up the connection when the component unmounts
    return () => {
        socket.disconnect();
    };
  } , []);



  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <FilterBar/>
      <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {loading ? (
                Array.from({length : 8}).map((_,index) =>  <ShimmerUI key={index} />)
                  
            ) : (
                (filteredDeals).map(deal => (
                    <DealCard key={deal._id} deal={deal} />
                ))
              )}
          </div>
      </section>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      <HowItWorks />
      <JoinTelegram />
      
    </main>
  )
}

export default Home
