import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/rockets.scss';

import Card from './Card';
import { useSelector } from 'react-redux';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

export default function Rockets() {
  const {loading, rockets} = useSelector((state) => {
    return state.rockets
  })

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
          pagination={{
            el: '.rockets__pagination',
            type: 'bullets',
          }}
        >
          {rockets.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Link to={`/rocket-info/${index}`}>
                  <Card data={item}/>
                </Link>
              </SwiperSlide>
            )
          })}

          <div className="rockets__navigation swiper__nav">
            <div className="rockets__pagination swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  )
}