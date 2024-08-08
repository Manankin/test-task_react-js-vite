import '../styles/header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="header__btn">Logo</div>
      <div className="header__nav nav">
        <span className="nav__link">Home</span>
        <span className="nav__link">About</span>
        <span className="nav__link">QA</span>
        <span className="nav__link">Contact form</span>
      </div>
      <div className="header__btn">Contacts Form</div>
    </div>
  )
}