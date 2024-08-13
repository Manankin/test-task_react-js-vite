import '../styles/header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <div className="header__btn">Logo</div>
      <div className="header__nav nav">
        <Link  to='/' className="nav__link">Home</Link>
        <Link  to='/about' className="nav__link">About</Link>
        <Link  to='/qa' className="nav__link">QA</Link>
        <Link  to='/contact' className="nav__link">Contact form</Link>
      </div>
      <div className="header__btn">Contacts Form</div>
    </div>
  )
}