import React from 'react'
import shoes from '../../assets/shoes.webp'
import item from '../../assets/item.avif'

const HomePage = () => {
    return (
        <div className="w-full min-h-screen">
            <img src={shoes} alt="" className="w-full  object-cover" />
            <h1 className="w-full text-center font-bold text-3xl my-6">
                NEW ARRIVALS
            </h1>

            <div className="grid grid-cols-4 gap-6 px-6">
                <div className="p-4 w-full bg-white shadow rounded">
                    <img src={item} className="w-full h-80 object-cover" alt="Super Pants" />
                    <h5 className="mt-2 font-semibold text-lg">
                        Super Pants: Beige (Classic Fit)
                    </h5>
                    <p className="text-gray-600">Men Super Flex Pants</p>
                    <h2 className="text-lg font-bold">$2599</h2>
                </div>

                <div className="p-4 w-full bg-white shadow rounded">
                    <img src={item} className="w-full h-80 object-cover" alt="Super Pants" />
                    <h5 className="mt-2 font-semibold text-lg">
                        Super Pants: Beige (Classic Fit)
                    </h5>
                    <p className="text-gray-600">Men Super Flex Pants</p>
                    <h2 className="text-lg font-bold">$2599</h2>
                </div>

                <div className="p-4 w-full bg-white shadow rounded">
                    <img src={item} className="w-full h-80 object-cover" alt="Super Pants" />
                    <h5 className="mt-2 font-semibold text-lg">
                        Super Pants: Beige (Classic Fit)
                    </h5>
                    <p className="text-gray-600">Men Super Flex Pants</p>
                    <h2 className="text-lg font-bold">$2599</h2>
                </div>

                <div className="p-4 w-full bg-white shadow rounded">
                    <img src={item} className="w-full h-80 object-cover" alt="Super Pants" />
                    <h5 className="mt-2 font-semibold text-lg">
                        Super Pants: Beige (Classic Fit)
                    </h5>
                    <p className="text-gray-600">Men Super Flex Pants</p>
                    <h2 className="text-lg font-bold">$2599</h2>
                </div>
                <div className="p-4 w-full bg-white shadow rounded">
                    <img src={item} className="w-full h-80 object-cover" alt="Super Pants" />
                    <h5 className="mt-2 font-semibold text-lg">
                        Super Pants: Beige (Classic Fit)
                    </h5>
                    <p className="text-gray-600">Men Super Flex Pants</p>
                    <h2 className="text-lg font-bold">$2599</h2>
                </div><div className="p-4 w-full bg-white shadow rounded">
                    <img src={item} className="w-full h-80 object-cover" alt="Super Pants" />
                    <h5 className="mt-2 font-semibold text-lg">
                        Super Pants: Beige (Classic Fit)
                    </h5>
                    <p className="text-gray-600">Men Super Flex Pants</p>
                    <h2 className="text-lg font-bold">$2599</h2>
                </div>
                

            </div>
        </div>
    )
}

export default HomePage
