// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../styles/bigCard.scss';
import { useSelector } from 'react-redux';

export default function BigCard() {
  const { index } = useParams();
  const {loading, rockets} = useSelector((state) => {
    return state.rockets
  })
  
  const currentRocket = rockets[index]
  const {
    name,
    diameter,
    pressurized_capsule,
    trunk,
    launch_payload_mass,
    return_payload_mass,
  } = currentRocket

  return (
    <div >
      <h2 className='bc-title'>{name}</h2>
      <div className="card card--xl">
        <div className="card__image--xl">
          <img src="../src/assets/rocketFrame.webp" alt="rocket image" />
        </div>
        <div className="card__info">
          <div className="card__title">{name}</div>
          <div className="card__describe describe-list">
            <div className="describe-list__item">
              <div className="describe-list__item-title">height</div>
              <div className="describe-list__item-value">{`${diameter.meters} m / ${diameter.feet} ft`}</div>
            </div>
            <div className="describe-list__item">
              <div className="describe-list__item-title">diameter</div>
              <div className="describe-list__item-value">{`${diameter.meters} m / ${diameter.feet} ft`}</div>
            </div>
            <div className="describe-list__item">
              <div className="describe-list__item-title">spacecraft volume</div>
              <div className="describe-list__item-value">{`${pressurized_capsule.payload_volume.cubic_meters} m`}<sup>3</sup> / {`${pressurized_capsule.payload_volume.cubic_feet} ft`}<sup>3</sup></div>
            </div>
            <div className="describe-list__item">
              <div className="describe-list__item-title">trunk volume</div>
              <div className="describe-list__item-value">{`${trunk.trunk_volume.cubic_meters} m`}<sup>3</sup> / {`${trunk.trunk_volume.cubic_feet} ft`}<sup>3</sup></div>
            </div>
            <div className="describe-list__item">
              <div className="describe-list__item-title">LAUNCH PAYLOAD MASS</div>
              <div className="describe-list__item-value">{`${launch_payload_mass.kg} kg/ ${launch_payload_mass.lb} lbs`}</div>
            </div>
            <div className="describe-list__item">
              <div className="describe-list__item-title">TRUNK VOLUME</div>
              <div className="describe-list__item-value">{`${trunk.trunk_volume.cubic_meters} m`}<sup>3</sup> / {`${trunk.trunk_volume.cubic_feet} ft`}<sup>3</sup></div>
            </div>
            <div className="describe-list__item">
              <div className="describe-list__item-title">LAUNCH PAYLOAD MASS</div>
              <div className="describe-list__item-value">{`${launch_payload_mass.kg} kg/ ${launch_payload_mass.lb} lbs`}</div>
            </div>
            <div className="describe-list__item">
              <div className="describe-list__item-title">RETURN PAYLOAD MASS</div>
              <div className="describe-list__item-value">{`${return_payload_mass.kg} kg / ${return_payload_mass.lb} lbs`}</div>
            </div>
            <div className="describe-list__item">
              <div className="describe-list__item-title">RETURN PAYLOAD MASS</div>
              <div className="describe-list__item-value">{`${return_payload_mass.kg} kg / ${return_payload_mass.lb} lbs`}</div>
            </div>
            <div className="describe-list__item">
              <div className="describe-list__item-title">spacecraft volume</div>
              <div className="describe-list__item-value">{`${pressurized_capsule.payload_volume.cubic_meters} m`}<sup>3</sup> / {`${pressurized_capsule.payload_volume.cubic_feet} ft`}<sup>3</sup></div>
            </div>
            <div className="describe-list__item">
              <div className="describe-list__item-title">RETURN PAYLOAD MASS</div>
              <div className="describe-list__item-value">{`${return_payload_mass.kg} kg / ${return_payload_mass.lb} lbs`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}