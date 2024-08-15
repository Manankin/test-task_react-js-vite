import { useSelector } from 'react-redux';
import '../styles/bigCard.scss';

export default function BigCard() {
  const {loading, rockets} = useSelector((state) => {
    return state.rockets
  })

  return (
    <div >
      <h2 className='bc-title'></h2>
      <div className="card card--xl">
        <div className="card__image--xl">
          <img src="../src/assets/rocketFrame.webp" alt="rocket image" />
        </div>
        <div className="card__info">
          <div className="card__title">Rocket 1</div>
          <div className="card__describe describe-list">
            <div className="describe-list__item">
              <div className="describe-list__item-title">height</div>
              <div className="describe-list__item-value">8.1 m / 26.7 ft</div>
            </div>
            <div className="describe-list__item">
              <div className="describe-list__item-title">height</div>
              <div className="describe-list__item-value">8.1 m / 26.7 ft</div>
            </div>
            <div className="describe-list__item">
              <div className="describe-list__item-title">height</div>
              <div className="describe-list__item-value">8.1 m / 26.7 ft</div>
            </div>
            <div className="describe-list__item">
              <div className="describe-list__item-title">height</div>
              <div className="describe-list__item-value">8.1 m / 26.7 ft</div>
            </div>
            <div className="describe-list__item">
              <div className="describe-list__item-title">height</div>
              <div className="describe-list__item-value">8.1 m / 26.7 ft</div>
            </div>
            <div className="describe-list__item">
              <div className="describe-list__item-title">height</div>
              <div className="describe-list__item-value">8.1 m / 26.7 ft</div>
            </div>
            <div className="describe-list__item">
              <div className="describe-list__item-title">height</div>
              <div className="describe-list__item-value">8.1 m / 26.7 ft</div>
            </div>
            <div className="describe-list__item">
              <div className="describe-list__item-title">height</div>
              <div className="describe-list__item-value">8.1 m / 26.7 ft</div>
            </div>
            <div className="describe-list__item">
              <div className="describe-list__item-title">height</div>
              <div className="describe-list__item-value">8.1 m / 26.7 ft</div>
            </div>
            <div className="describe-list__item">
              <div className="describe-list__item-title">height</div>
              <div className="describe-list__item-value">8.1 m / 26.7 ft</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}