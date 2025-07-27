import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { DealsContext } from '../context/DealsContext';
import axios from 'axios';
import { toast } from 'react-toastify';


const ProductDetailPage = () => {

  const { id } = useParams();
  const { backendUrl } = useContext(DealsContext);
  const [deal , setDeal ] = useState(null);
  const [loading , setLoading] = useState(true);

  const fetchDealInfo = async () => {

    try {
      const response = await axios.get(`${backendUrl}/api/deals/deal/${id}`);
      console.log(response.data);
      if(response.data.success) {
        setDeal(response.data.deal);
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

  useEffect(() => {
    fetchDealInfo();
  } , [id, backendUrl]);

    if (loading) {
        // You can create a more detailed shimmer UI for this page
        return <div className="text-center py-20">Loading...</div>;
    }

    if (!deal) {
        return <div className="text-center py-20">Deal not found.</div>;
    }


  return (
    <div className='bg-gray-50 py-12'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium mb-6">
              Back to all deals
          </Link>
          { deal && (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                      {/* Image Section */}
                      <div className="p-4">
                          {deal.imagePath ? (
                              <img src={deal.imagePath} alt={deal.title} className="w-full h-auto object-contain rounded-lg" />
                          ) : (
                              <div className="w-full h-80 bg-gray-100 flex items-center justify-center rounded-lg">
                                  <span className="text-gray-500">No Image Available</span>
                              </div>
                          )}
                      </div>

                      {/* Details Section */}
                      <div className="p-8 flex flex-col justify-between">
                          <div>
                              <span className="text-sm font-bold uppercase text-indigo-600">{deal.source}</span>
                              <h1 className="text-3xl font-extrabold text-gray-900 mt-2">{deal.title}</h1>
                              {deal.discount && (
                                  <p className="text-lg font-semibold text-green-600 mt-2">{deal.discount}% OFF</p>
                              )}
                              <p className="text-gray-600 mt-6">
                                  Grab this amazing deal before it's gone! Prices and availability are subject to change. Click the button below to go to the store page and complete your purchase.
                              </p>
                          </div>
                          <a 
                              href={deal.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="w-full text-center bg-black text-white font-bold py-4 rounded-lg mt-8 hover:bg-gray-700 transition-colors text-lg"
                          >
                              Grab Deal Now
                          </a>
                      </div>
                  </div>
              </div>
            )}
      </div>
    </div>
  )
}

export default ProductDetailPage
