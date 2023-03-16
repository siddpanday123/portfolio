import React from 'react'
import './testimonials.css'
import Avatar from '../../assets/avatar.jpg'


import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';





const data = [
  {
   Avtr: Avatar,
   name: 'Tina Sonw',
   review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dignissimos minima numquam nostrum aliquam dolorem maiores autem voluptatem repellendus at'

  },
  {
    Avtr: Avatar,
    name: 'Tina Sonw',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dignissimos minima numquam nostrum aliquam dolorem maiores autem voluptatem repellendus at'
 
   },
   {
    Avtr: Avatar,
    name: 'Tina Sonw',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dignissimos minima numquam nostrum aliquam dolorem maiores autem voluptatem repellendus at'
 
   },


]



const Testimonials = () => {
  return (
    <section id="testimonials">

      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>


      <Swiper className="container testimonial_container" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({Avtr, name, review,} , index)=>{
                  return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={Avtr} alt="Avatar" />
                </div>
                <h5 className='client_name'>{name} </h5>
                  <small className='client_review'>{review}
                  </small>
              </SwiperSlide>
             )
          })
        }    
      </Swiper>
    </section>
  )
}

export default Testimonials