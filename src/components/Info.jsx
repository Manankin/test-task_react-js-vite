import '../styles/info.scss';

export default function Info() {
  return (
    <div className="info">
      <div className="info__item">
        <div className="info__item-amount">43</div>
        <div className="info__item-text">TOTAL LAUNCHES</div>
      </div>
      <div className="info__item">
        <div className="info__item-amount">46</div>
        <div className="info__item-text">VISITS TO THE ISS</div>
      </div>
      <div className="info__item">
        <div className="info__item-amount">25</div>
        <div className="info__item-text">TOTAL REFLIGHTS</div>
      </div>
    </div>
  )
}