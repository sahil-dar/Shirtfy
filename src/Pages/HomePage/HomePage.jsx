import React from 'react'
import shoes from '../../assets/shoes.webp'
import item from '../../assets/item.avif'

const HomePage = () => {
    return (
        <div className="w-screen min-h-screen pb-3">
            <img src={shoes} title='Sasuke Shoes' className="w-full object-cover" />
            <h1 className="w-full text-center font-bold text-3xl my-6">
                NEW ARRIVALS
            </h1>

            <div className="grid grid-cols-4 gap-6 px-6">
                <div className="p-4 w-full bg-white shadow rounded">
                    <img src={item} className="w-full h-80 object-cover" title="Super Pants" />
                    <h5 className="mt-2 font-semibold text-lg">
                        Super Pants: Beige (Classic Fit)
                    </h5>
                    <p className="text-gray-600">Men Super Flex Pants</p>
                    <h2 className="text-lg font-bold">$200</h2>
                </div>

                <div className="p-4 w-full bg-white shadow rounded">
                    <img src={item} className="w-full h-80 object-cover" title="Super Pants" />
                    <h5 className="mt-2 font-semibold text-lg">
                        Super Pants: Beige (Classic Fit)
                    </h5>
                    <p className="text-gray-600">Men Super Flex Pants</p>
                    <h2 className="text-lg font-bold">$200</h2>
                </div>

                <div className="p-4 w-full bg-white shadow rounded">
                    <img src={item} className="w-full h-80 object-cover" title="Super Pants" />
                    <h5 className="mt-2 font-semibold text-lg">
                        Super Pants: Beige (Classic Fit)
                    </h5>
                    <p className="text-gray-600">Men Super Flex Pants</p>
                    <h2 className="text-lg font-bold">$200</h2>
                </div>

                <div className="p-4 w-full bg-white shadow rounded">
                    <img src={item} className="w-full h-80 object-cover" title="Super Pants" />
                    <h5 className="mt-2 font-semibold text-lg">
                        Super Pants: Beige (Classic Fit)
                    </h5>
                    <p className="text-gray-600">Men Super Flex Pants</p>
                    <h2 className="text-lg font-bold">$200</h2>
                </div>
                <div className="p-4 w-full bg-white shadow rounded">
                    <img src={item} className="w-full h-80 object-cover" title="Super Pants" />
                    <h5 className="mt-2 font-semibold text-lg">
                        Super Pants: Beige (Classic Fit)
                    </h5>
                    <p className="text-gray-600">Men Super Flex Pants</p>
                    <h2 className="text-lg font-bold">$200</h2>
                </div>
                <div className="p-4 w-full bg-white shadow rounded">
                    <img src={item} className="w-full h-80 object-cover" title="Super Pants" />
                    <h5 className="mt-2 font-semibold text-lg">
                        Super Pants: Beige (Classic Fit)
                    </h5>
                    <p className="text-gray-600">Men Super Flex Pants</p>
                    <h2 className="text-lg font-bold">$200</h2>
                </div>
                <div className="p-4 w-full bg-white shadow rounded">
                    <img src={item} className="w-full h-80 object-cover" title="Super Pants" />
                    <h5 className="mt-2 font-semibold text-lg">
                        Super Pants: Beige (Classic Fit)
                    </h5>
                    <p className="text-gray-600">Men Super Flex Pants</p>
                    <h2 className="text-lg font-bold">$200</h2>
                </div>
                <div className="p-4 w-full bg-white shadow rounded">
                    <img src={item} className="w-full h-80 object-cover" title="Super Pants" />
                    <h5 className="mt-2 font-semibold text-lg">
                        Super Pants: Beige (Classic Fit)
                    </h5>
                    <p className="text-gray-600">Men Super Flex Pants</p>
                    <h2 className="text-lg font-bold">$200</h2>
                </div>

            </div>

            <footer className='flex w-full border bg-zinc-50 p-6 mt-4 content-center justify-around'>
            <div className=''>
            <h1 className='text-red-500 font-bold text-lg'>NEED HELP</h1>
            <p className='hover:text-red-500'>Contact Us</p>
            <p className='hover:text-red-500'>Track Order</p>
            <p className='hover:text-red-500'>Returns And Refunds</p>
            <p className='hover:text-red-500'>FAQs</p>
            <p className='hover:text-red-500'>My Account</p>
            </div>

            <div className='content-center'>
            <h1 className='text-red-500 font-bold text-lg'>COMPANY</h1>
             <p className='hover:text-red-500'>About Us</p>
             <p className='hover:text-red-500'>Investor Relation</p>
             <p className='hover:text-red-500'>Careers</p>
             <p className='hover:text-red-500'>Gift Vouchers</p>
             <p className='hover:text-red-500'>Community Initiatives</p>
            </div>

            <div>
                <h1 className='text-red-500 font-bold text-lg'>MORE INFO</h1>
                <p className='hover:text-red-500'>T&C</p>
                <p className='hover:text-red-500'>Privacy Policy</p>
                <p className='hover:text-red-500'>Sitemap</p>
                <p className='hover:text-red-500'>Get Notified</p>
                <p className='hover:text-red-500'>Blogs</p>
            </div>

            <div className='float-right'>
                <h1 className='text-red-500 font-bold text-lg'>STORE NEAR ME</h1>
                <p className='hover:text-red-500'>Mumbai</p>
                <p className='hover:text-red-500'>Pune</p>
                <p className='hover:text-red-500'>Banglore</p>
                <p className='hover:text-red-500'>Hubbali</p>
                <p className='hover:text-red-500'>View More</p>
            </div>

            </footer>
        </div>
    )
}

export default HomePage
