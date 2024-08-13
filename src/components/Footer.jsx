import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/footer.scss';
// import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

export default function Footer() {
  return (
    <div className="footer">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination
        navigation
        slidesPerView={1}
      >
        <SwiperSlide className='footer__slide'>
          <div className="footer__img-bg">
            <img src="../src/assets/rocketImage.webp" alt="slide #1" />
          </div>
          <div className="footer__slide-info">
            <div className="footer__title">STARSHIP <br />CAPABILITIES</div>
            <div className="footer__describe">
              As the most powerful launch system ever developed, Starship will be able to carry up to 100 people on long-duration, interplanetary flights. Starship will also help enable satellite delivery, the development of a Moon base, and point-to-point transport here on Earth.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='footer__slide'>
          <div className="footer__img-bg">
            <img src="../src/assets/rocketImage.webp" alt="slide #1" />
          </div>
          <div className="footer__slide-info">
            <div className="footer__title">STARSHIP <br />CAPABILITIES</div>
            <div className="footer__describe">
              As the most powerful launch system ever developed, Starship will be able to carry up to 100 people on long-duration, interplanetary flights. Starship will also help enable satellite delivery, the development of a Moon base, and point-to-point transport here on Earth.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='footer__slide'>
          <div className="footer__img-bg">
            <img src="../src/assets/rocketImage.webp" alt="slide #1" />
          </div>
          <div className="footer__slide-info">
            <div className="footer__title">STARSHIP <br />CAPABILITIES</div>
            <div className="footer__describe">
              As the most powerful launch system ever developed, Starship will be able to carry up to 100 people on long-duration, interplanetary flights. Starship will also help enable satellite delivery, the development of a Moon base, and point-to-point transport here on Earth.
            </div>
          </div>
        </SwiperSlide>

        {/* <div className="footer__navigation swiper__nav">
          <div className="footer__navigation-left"></div>
          <div className="footer__pagination swiper-pagination"></div>
          <div className="footer__navigation-right"></div>
        </div> */}
      </Swiper>
    </div>
  )
}