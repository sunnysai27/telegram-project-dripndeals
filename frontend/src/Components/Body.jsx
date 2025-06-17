import React from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

const Body = ({deals}) => {
    console.log(deals)
  
    const generateSlug = ({title, messageId}) => {
       return `${title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')}-${messageId}`;
      
    }

  return (
    <div className='m-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {
          deals.map((deal) => (
              <Link to={`/deal/${generateSlug(deal)}`} key={deal.messageId}>
                <ProductCard key={deal._id} info={deal} />
              </Link>
          ))

        }
      </div>
  )
}

export default Body
