import '../styles/card.scss';

export default function Card() {
  return (
    <div className="card">
      <div className="card__image">
        {/* <img src="https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg" alt="rocket image" /> */}
        <img src="../src/assets/rocketFrame.webp" alt="rocket image" />
      </div>
      <div className="card__title">Rocket 1</div>
      <div className="card__describe describe-list">
        <div className="describe-list__item">
          <div className="describe-list__item-title">height</div>
          <div className="describe-list__item-value">8.1 m / 26.7 ft</div>
        </div>
        <div className="describe-list__item">
          <div className="describe-list__item-title">diameter</div>
          <div className="describe-list__item-value">4 m / 13 ft</div>
        </div>
        <div className="describe-list__item">
          <div className="describe-list__item-title">SPACECRAFT VOLUME</div>
          <div className="describe-list__item-value">9.3 m <sup>3</sup>/ 328 ft <sup>3</sup></div>
        </div>
        <div className="describe-list__item">
          <div className="describe-list__item-title">TRUNK VOLUME</div>
          <div className="describe-list__item-value">37 m <sup>3</sup> / 1300 ft <sup>3</sup></div>
        </div>
        <div className="describe-list__item">
          <div className="describe-list__item-title">LAUNCH PAYLOAD MASS</div>
          <div className="describe-list__item-value">6,000 kg / 13,228 lbs</div>
        </div>
        <div className="describe-list__item">
          <div className="describe-list__item-title">LAUNCH PAYLOAD MASS</div>
          <div className="describe-list__item-value">3,000 kg / 6,614 lbs</div>
        </div>
      </div>
    </div>
  )
}