import '../styles/person.scss';

export default function PersonCard() {
  return (
    <div className="person">
      <div className="person__photo">
        <img src="../public/images/photo.webp" alt="" />
      </div>
      <div className="person__info">
        <div className="person__position">st.mechanic</div>
        <div className="person__name">Dave Johnson</div>
      </div>
    </div>
  )
}
