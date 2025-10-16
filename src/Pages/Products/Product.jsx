import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Product = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    // Fallback if user directly visits /product/:id without state
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
        <button
          onClick={() => navigate('/')}
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const { id, title, subTitle, price, image } = state;

  return (
    <div className="w-screen min-h-screen bg-gray-50 pb-20 pt-24 px-6 flex justify-center">
         <button className='hover:text-red-500 absolute left-20' title='Click to go back' onClick={() => navigate(-1)}>

            <FontAwesomeIcon
              icon={faArrowLeft} />
          </button>
      <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row gap-10 max-w-5xl w-full p-6">
        {/* Image Section */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 w-full flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-gray-600 mb-4">{subTitle}</p>
            <p className="text-2xl font-semibold text-red-500 mb-6">{price}</p>

            <h2 className="text-lg font-semibold mb-2">Description:</h2>
            <p className="text-gray-700 mb-6">
              This is a detailed description of the product. You can replace this
              with dynamic data from your backend later. It includes materials,
              specifications, and additional product details.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
              Add to Cart
            </button>
            <button
              onClick={() => navigate('/')}
              className="border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-100"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
