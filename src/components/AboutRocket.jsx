import { useParams } from "react-router-dom";
import BigCard from "./BigCard";
import Header from "./Header";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import rocketImage from '../images/rocketImage.webp';

export default function AboutRocket() {
  const {index} = useParams();
  const {loading, rockets} = useSelector((state) => {
    return state.rockets
  })

  return (
    <>
      <div className="rocket-page">
        <Header/>
        <div className="empty-page__info"></div>
        <BigCard />
      </div>
      <div className="mb-100"></div>
      <div className="footer">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination
          navigation
          slidesPerView={1}
          >
          {rockets[index].flickr_images.map((item, index) => {
            return (
              <SwiperSlide className='footer__slide' key={index}>
                <div className="footer__img-bg">
                  <img src={item} />
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
      <div className="footer">
        <div className="footer__slide">
          <div className="footer__img-bg">
              <img src={rocketImage} alt="slide #1" />
            </div>
            <div className="footer__slide-info to-bottom">
              <div className="footer__title">STARSHIP <br />CAPABILITIES</div>
              <div className="footer__describe">
                As the most powerful launch system ever developed, Starship will be able to carry up to 100 people on long-duration, interplanetary flights. Starship will also help enable satellite delivery, the development of a Moon base, and point-to-point transport here on Earth.
              </div>
            </div>
        </div>
      </div>
    </>
  )
}