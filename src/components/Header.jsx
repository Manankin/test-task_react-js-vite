import '../styles/header.scss';

export default function Header() {
  return (
    <div className="header">
      <div className="header__btn">Logo</div>
      <div className="header__nav nav">
        <a href='' className="nav__link">Home</a>
        <a href='' className="nav__link">About</a>
        <a href='' className="nav__link">QA</a>
        <a href='' className="nav__link">Contact form</a>
      </div>
      <div className="header__btn">Contacts Form</div>
    </div>
  )
}