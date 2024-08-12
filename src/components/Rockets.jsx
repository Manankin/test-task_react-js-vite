import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/modules/navigation.scss';
import '../styles/rockets.scss';

import Card from './Card';
import { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Rockets() {
  const [swiper, setSwiper] = useState();

  return (
    <div className="rockets">
      <h2 className="rockets__title">Our rockets</h2>
      <div>
        <Swiper
          onSwiper={setSwiper}
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={20}
          slidesPerGroup={1}
          navigation={{
            prevEl: '.rockets__navigation-left',
            nextEl: '.rockets__navigation-right',
          }}
          pagination={{
            el: '.rockets__pagination',
            type: 'bullets',
            // dynamicBullets: true,
            clickable: true,
          }}
          swipeHandler={'.rockets__pagination'}
          // pagination
        >
          <SwiperSlide> <Card/> </SwiperSlide>
          <SwiperSlide> <Card/> </SwiperSlide>
          <SwiperSlide> <Card/> </SwiperSlide>
          <SwiperSlide> <Card/> </SwiperSlide>
          <SwiperSlide> <Card/> </SwiperSlide>
          <div className="rockets__pagination swiper-pagination"></div>
          
        </Swiper>
      </div>

      <div className="rockets__navigation">
        <div className="rockets__navigation-left"></div>
        <div className="rockets__navigation-right"></div>
      </div>

    </div>
  )
}