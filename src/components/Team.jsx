import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/team.scss';
import PersonCard from './PersonCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export default function Team() {
  return (
    <div className="team">
      <div className="team__info">
        <div className="team__title">Team</div>
        <div className="team__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor sed urna a faucibus. Pellentesque mi nisl, mollis convallis metus id, congue semper neque. Sed suscipit eget ipsum ut gravida. Fusce </div>
        <div className="team__navigation navigation">
          <div className="navigation__btn navigation__btn--left"></div>
          <div className="navigation__btn navigation__btn--right"></div>
        </div>
      </div>
      <div className="team__members">
        <Swiper
          modules={[Navigation]}
          slidesPerView={2.1}
          spaceBetween={20}
          slidesPerGroup={1}
          navigation={{
            prevEl: '.navigation__btn--left',
            nextEl: '.navigation__btn--right',
            // disabledClass: false,
          }}
        >
          <SwiperSlide>
            <PersonCard />
          </SwiperSlide>

          <SwiperSlide>  
            <PersonCard />
          </SwiperSlide>

          <SwiperSlide>  
            <PersonCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}