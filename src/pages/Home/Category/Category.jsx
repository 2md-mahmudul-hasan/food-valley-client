import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";



import 'swiper/css';
import 'swiper/css/pagination';



import s1 from '../../../assets/home/slide1.jpg'
import s2 from '../../../assets/home/slide2.jpg'
import s3 from '../../../assets/home/slide3.jpg'
import s4 from '../../../assets/home/slide4.jpg'
import s5 from '../../../assets/home/slide5.jpg'



const Category = () => {
  return (
    <Swiper spaceBetween={10}
      slidesPerView={4}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide>
        <img src={s1} />
        <h2 className="-mt-12 text-center uppercase">Salad</h2>``
      </SwiperSlide>
      <SwiperSlide>
        <img src={s2} />
        <h2 className="-mt-12 text-center uppercase">Salad</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={s3} />
        <h2 className="-mt-12 text-center uppercase">Salad</h2>
      </SwiperSlide>

      <SwiperSlide>
        <img src={s2} />
        <h2 className="-mt-12 text-center uppercase">Salad</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={s1} />
        <h2 className="-mt-12 text-center uppercase">Salad</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={s4} />
        <h2 className="-mt-12 text-center uppercase">Salad</h2>
      </SwiperSlide>
      <SwiperSlide>
        <img src={s5} />
        <h2 className="-mt-12 text-center uppercase">Salad</h2>
      </SwiperSlide>

    </Swiper>
  );
};

export default Category;