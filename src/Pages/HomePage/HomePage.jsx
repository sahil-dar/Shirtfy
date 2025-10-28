import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card'
import item from '../../assets/BlackPanther.avif'
import Batman from '../../assets/Batman.avif'
import hero1 from '../../assets/hero1.avif'
import hero2 from '../../assets/hero3.avif'
import shoes from '../../assets/shoes.webp'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export const items = [
  { id: 1, title: "Super Pants: Beige (Classic Fit)", subTitle: "Super Pants", image: item, price: "$200" },
  { id: 2, title: "Super Pants: Beige (Classic Fit)", subTitle: "Super Pants", image: item, price: "$200" },
  { id: 3, title: "Super Pants: Beige (Classic Fit)", subTitle: "Super Pants", image: item, price: "$200" },
  { id: 4, title: "Super Pants: Beige (Classic Fit)", subTitle: "Super Pants", image: item, price: "$200" },
  { id: 5, title: "Super Pants: Beige (Classic Fit)", subTitle: "Super Pants", image: item, price: "$200" },
  { id: 6, title: "Super Pants: Beige (Classic Fit)", subTitle: "Super Pants", image: item, price: "$200" },
  { id: 7, title: "Super Pants: Beige (Classic Fit)", subTitle: "Super Pants", image: item, price: "$200" },
  { id: 8, title: "Super Pants: Beige (Classic Fit)", subTitle: "Super Pants", image: item, price: "$200" }
]

const HomePage = () => {
  const navigate = useNavigate()
  const images = [Batman, hero1, hero2, shoes]

  function CustomArrows({ className, style, onClick, direction }) {
    return (
      <button
        className={className}
        style={{
          ...style,
          display: "block",
          borderRadius: "50%",
          border: "none",
          width: "40px",
          height: "40px",
          zIndex: 1,
          [direction === 'next' ? 'right' : 'left']: "10px"
        }}
        onClick={onClick}
      >
        {direction === 'next' ? <FontAwesomeIcon icon={faAngleRight} /> : <FontAwesomeIcon icon={faAngleLeft} />}
      </button>
    )
  }

  const settings = {
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <CustomArrows direction="next" />,
    prevArrow: <CustomArrows direction="prev" />
  }

  return (
    <div className="w-screen min-h-screen pb-3 pt-20">
      <div style={{ margin: '0 auto', position: 'relative' }}>
        <Slider {...settings}>
          {images.map((url, index) => (
            <div key={index}>
              <img src={url} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '450px', objectFit: 'cover' }} />
            </div>
          ))}
        </Slider>
      </div>

      <h1 className="w-full text-center font-bold text-3xl my-6">NEW ARRIVALS</h1>

      <div className="grid grid-cols-4 gap-6 px-6">
        {items.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            subTitle={product.subTitle}
            price={product.price}
            image={product.image}
          />
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
  )
}

export default HomePage
