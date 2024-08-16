import '../styles/person.scss';
// import personImage from '../images/photo.webp';

export default function PersonCard() {
  return (
    <div className="person">
      <div className="person__photo">
        <img src='./images/photo.webp' alt="teammate photo" />
      </div>
      <div className="person__info">
        <div className="person__position">st.mechanic</div>
        <div className="person__name">Dave Johnson</div>
      </div>
    </div>
  )
}
