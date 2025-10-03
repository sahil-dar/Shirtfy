import React from 'react'
import Card from '../HomePage/Card'
import item from '../../assets/Womans.avif'
import { useNavigate } from 'react-router-dom';
import { faLock, faArrowLeft, faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Woman = () => {
      const Navigate = useNavigate();

       const items = [
            {
                title:"Super Pants: Beige (Classic Fit)",
                subTitle:"Super Pants",
                image:item,
                price: "$200",
            },
    
            {
                title:"Super Pants: Beige (Classic Fit)",
                subTitle:"Super Pants",
                image:item,
                price: "$200",
            },
    
            {
                title:"Super Pants: Beige (Classic Fit)",
                subTitle:"Super Pants",
                image:item,
                price: "$200",
            },
    
            {
                title:"Super Pants: Beige (Classic Fit)",
                subTitle:"Super Pants",
                image:item,
                price: "$200",
            },
            {
                title:"Super Pants: Beige (Classic Fit)",
                subTitle:"Super Pants",
                image:item,
                price: "$200",
            },
            {
                title:"Super Pants: Beige (Classic Fit)",
                subTitle:"Super Pants",
                image:item,
                price: "$200",
            },
            {
                title:"Super Pants: Beige (Classic Fit)",
                subTitle:"Super Pants",
                image:item,
                price: "$200",
            },
            {
                title:"Super Pants: Beige (Classic Fit)",
                subTitle:"Super Pants",
                image:item,
                price: "$200",
            }
        ]
  return (
    <>
     <div className="w-screen min-h-screen pb-3 pt-20">
        <button className='absolute hover:text-red-500 p-4' title='Click to go back' onClick={() => Navigate(-1)}>
            <FontAwesomeIcon
              icon={faArrowLeft} />
          </button>
      <h1 className="w-full text-center font-bold text-3xl my-6">
                WOMANS COLLECTION
            </h1>

            <div className="grid grid-cols-4 gap-6 px-6">
                
                    
                   {items.map((items, index) => (
                    <Card key={index} title={items.title} subTitle={items.subTitle} price={items.price} image={items.image} />
                    
                ))}
                
            </div>

            <footer className='flex cursor-default w-full border bg-zinc-50 p-6 mt-4 content-center justify-around'>
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
    </>
  )
}

export default Woman;
