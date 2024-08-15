import BigCard from "./BigCard";
import Footer from "./Footer";
import Header from "./Header";

export default function AboutRocket() {
  return (
    <>
      <div className="rocket-page">
        <Header/>
        {/* <div className="empty-page__info"></div> */}
        <BigCard />
      </div>
      <div className="mb-100"></div>
      <Footer />
      <div className="footer">
        <div className="footer__slide">
          <div className="footer__img-bg">
              <img src="../src/assets/rocketImage.webp" alt="slide #1" />
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