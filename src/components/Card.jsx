/* eslint-disable react/prop-types */
import '../styles/card.scss';

export default function Card({ data }) {
  const {
    name,
    launch_payload_mass,
    return_payload_mass,
    trunk,
    diameter,
    height_w_trunk,
    pressurized_capsule,
  } = data;

  return (
    <div className="card">
      <div className="card__image">
        {/* <img src="https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg" alt="rocket image" /> */}
        <img src="../src/assets/rocketFrame.webp" alt="rocket image" />
      </div>
      <div className="card__title">{name}</div>
      <div className="card__describe describe-list">
        <div className="describe-list__item">
          <div className="describe-list__item-title">height</div>
          <div className="describe-list__item-value">{`${height_w_trunk.meters} m / ${height_w_trunk.feet} ft`}</div>
        </div>
        <div className="describe-list__item">
          <div className="describe-list__item-title">diameter</div>
          <div className="describe-list__item-value">{`${diameter.meters} m / ${diameter.feet} ft`}</div>
        </div>
        <div className="describe-list__item">
          <div className="describe-list__item-title">SPACECRAFT VOLUME</div>
          <div className="describe-list__item-value">{`${pressurized_capsule.payload_volume.cubic_meters} m`}<sup>3</sup>/ {`${pressurized_capsule.payload_volume.cubic_feet} ft`}<sup>3</sup></div>
        </div>
        <div className="describe-list__item">
          <div className="describe-list__item-title">TRUNK VOLUME</div>
          <div className="describe-list__item-value">{`${trunk.trunk_volume.cubic_meters} m`}<sup>3</sup> / {`${trunk.trunk_volume.cubic_feet} ft`}<sup>3</sup></div>
        </div>
        <div className="describe-list__item">
          <div className="describe-list__item-title">LAUNCH PAYLOAD MASS</div>
          <div className="describe-list__item-value">{`${launch_payload_mass.kg} m / ${launch_payload_mass.lb} ft`}</div>
        </div>
        <div className="describe-list__item">
          <div className="describe-list__item-title">RETURN PAYLOAD MASS</div>
          <div className="describe-list__item-value">{`${return_payload_mass.kg} m / ${return_payload_mass.lb} ft`}</div>
        </div>
      </div>
    </div>
  )
}