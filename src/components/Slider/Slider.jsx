import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import {SliderProducts} from '../../data/products'
import './Slider.css'


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div className="product">
        <Swiper
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 3
          },
          0: {
            slidesPerView: 1
          }
        }}
        >
                {SliderProducts.map((slide, i) => {
                    return (
            <SwiperSlide>
                <div className="p-left flex flex-col justify-between">
                    <div className="p-name flex flex-col">
                        <span className='text-xl font-semibold'>{slide.name}</span>
                        <span className='text-xs'>{slide.detail}</span>
                    </div>

                    <span className='font-semibold text-3xl'>{slide.price}$</span>

                    <a className='border rounded-2xl border-black p-1 text-center' href="http://">Shop Now</a>
                </div>

                <img className='product-img absolute left-44 bottom-2 block -rotate-12 w-20 h-36' src={slide.img} alt="product" />
            </SwiperSlide>
            
                )})}
        </Swiper>
    </div>
  )
}

export default Slider