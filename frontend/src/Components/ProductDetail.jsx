import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState([]);

  const { slug } = useParams();
  const messageId = slug.split("-").pop();

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_API}deals/${messageId}`
    );
    const json = await response.json();
    if (json.success) {
      setProductInfo(json.info);
    } else {
      console.log(json.error);
    }
  };

  return (
    // <div className='mx-auto my-4 flex flex-col sm:flex-row w-[80%] bg-gray-300'>
    //     <div className="p-2 m-2 bg-gray-100 w-full sm:w-[35%] overflow-hidden rounded-lg">
    //         <img className="w-full h-full object-cover object-center rounded-lg"  src={productInfo.imagePath}/>
    //     </div>
    //     <div className='p-2 mx-4 w-full'>
    //         <h1 className='text-2xl mb-2'>{productInfo.title}</h1>
    //         <a className='px-4 py-2 mt-9 bg-black text-white ' href={productInfo.url} target='_blank'>Buy Now!</a>
    //     </div>
    // </div>
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 bg-white shadow-md p-4 rounded-lg">
        {/* Left - Product Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <img
            src={productInfo.imagePath}
            alt="product"
            className="w-full max-w-xs max-h-64 md:max-h-80 object-contain rounded-lg"
          />
        </div>

        {/* Right - Product Details */}
        <div className="md:w-1/2 w-full flex flex-col justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold mb-4">
              {productInfo.title}
            </h1>
            <p className="text-xl text-green-600 font-semibold mb-1">
              Offer Price:
            </p>
            <p className="line-through text-gray-500 text-sm mb-1">
              MRP: ₹1000
            </p>
            <p className="text-red-500 font-medium mb-4">Discount: 69%</p>

            <a className="bg-red-500 text-white px-4 py-2 rounded-lg w-full sm:w-fit hover:bg-red-600 transition" href={productInfo.url}>🔥 Buy Now
            </a>

            <div className="mt-4 flex gap-2">
                <p className="text-center font-medium mt-1 mx-2">Join us on</p>
              <button className="bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600">
                WhatsApp
              </button>
              <button className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600">
                Telegram
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
