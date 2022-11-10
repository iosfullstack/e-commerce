import React from 'react'
import './Testimonials.css'
import Hero from '../../assets/testimonialHero.png'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from "swiper";
// import "swiper/css/pagination";
import {TestimonialsData} from '../../data/testimonials'
const Testimonials = () => {
  return (
    <div className="testimonial flex flex-col justify-center items-center py-16 px-8">
        <div className="wrapper grid items-end w-full grid-cols-grid-cols-fr">
            <div className="t-container flex flex-col gap-6">
                <span className='block uppercase text-4xl font-bold'>top rated</span>
                <span className='block w-80 text-xs h-8'>SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN REJOICED.</span>
            </div>

            <img className='block h-72 justify-self-center' src={Hero} alt="hero" />

            <div className="t-customer flex flex-col gap-6 text-right">
                <span className='block uppercase text-4xl font-bold'>100k</span>
                <span className='block w-80 text-xs h-8'>HAPPY CUSTOMERS WITH US</span>
            </div>
        </div>

        <div className="t-reviews uppercase text-4xl font-bold">Review</div>

        <div className="testimonial-courasel w-full mt-6">
        <Swiper>
          {
            TestimonialsData.map((testimonial) => {
              return(
              <SwiperSlide
              slidesPerView={3}
              spaceBetween={20}
              slidesPerGroup={1}
              className='mySwper p-9'
              breakpoints={{
                856: {
                  slidesPerView: 2
                },
                640: {
                  slidesPerView: 1
                },
                0: {
                  slidesPerView: 1
                }
              }}
              >
              <div className="testimonials flex flex-col gap-2 relative w-96 bg-white items-center justify-center h-52 text-center p-4 rounded-lg">
                <img className='absolute -top-8' src={testimonial.image} alt="t-img" />
                <span className='text-sm -tracking-tightest mt-5'>{testimonial.comment}</span>
                <hr className='font-bold text-base w-72 h-1 mx-9 my-3' />
                <span className='text-base font-medium'>{testimonial.name}</span>
              </div>
              </SwiperSlide>
              )
            })
          }
        </Swiper>
        </div>
    </div>
  )
}

export default Testimonials