import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/rockets.scss';

import Card from './Card';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Rockets() {
  return (
    <div className="rockets">
      <h2 className="rockets__title">Our rockets</h2>
      <div className='rocets__swiper'>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={20}
          slidesPerGroup={1}
          navigation
          // navigation={{
          //   prevEl: '.rockets__navigation-left',
          //   nextEl: '.rockets__navigation-right',
          // }}
          pagination={{
            el: '.rockets__pagination',
            type: 'bullets',
            // clickable: true,
          }}
          // swipeHandler={'.rockets__pagination'}
          // pagination
        >
          <SwiperSlide> <Card/> </SwiperSlide>
          <SwiperSlide> <Card/> </SwiperSlide>
          <SwiperSlide> <Card/> </SwiperSlide>
          <SwiperSlide> <Card/> </SwiperSlide>
          <SwiperSlide> <Card/> </SwiperSlide>

          <div className="rockets__navigation swiper__nav">
            {/* <div className="rockets__navigation-left"></div> */}
            <div className="rockets__pagination swiper-pagination"></div>
            {/* <div className="rockets__navigation-right"></div> */}
          </div>
        </Swiper>
      </div>


    </div>
  )
}