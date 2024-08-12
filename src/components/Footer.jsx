import 'swiper/css';
import '../styles/footer.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Footer() {
  return (
    <div className="footer">
      <Swiper
        navigation
        pagination
        slidesPerView={1}
        autoplay
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
      </Swiper>
    </div>
  )
}