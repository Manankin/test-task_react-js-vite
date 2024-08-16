import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/footer.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useSelector } from 'react-redux';

export default function Footer() {
  const {loading, rockets} = useSelector((state) => {
    return state.rockets
  })

  return (
    <div className="footer">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination
        navigation
        slidesPerView={1}
      >
        {rockets.map((item, index) => {
          return (
            <SwiperSlide className='footer__slide' key={index}>
              <div className="footer__img-bg">
                <img src={item.flickr_images[index < 3 ? index : 0]} />
              </div>
              <div className="footer__slide-info">
                <div className="footer__title">STARSHIP <br />CAPABILITIES</div>
                <div className="footer__describe">
                  As the most powerful launch system ever developed, Starship will be able to carry up to 100 people on long-duration, interplanetary flights. Starship will also help enable satellite delivery, the development of a Moon base, and point-to-point transport here on Earth.
                </div>
              </div>
            </SwiperSlide>
          )})
        }
      </Swiper>
    </div>
  )
}