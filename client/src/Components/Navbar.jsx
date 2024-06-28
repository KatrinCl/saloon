import React, { useEffect, useState } from 'react';
import './../Styles/Navbar.css';
import { Link } from 'react-scroll';
import OrderCall from './OrderCall';

const Navbar = () => {
  const [isOrderCallOpen, setIsOrderCallOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const toggleOrderCall = () => {
    setIsOrderCallOpen(!isOrderCallOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''} ${isMenuOpen ? 'active' : ''}`}>
      <div className="nav-top">
        <div className="nav-left">
          <img src="./logo.png" alt="Logo" />
          <div className="nav-text">
            <h1>Essence</h1>
            <p>beauty & spa</p>
          </div>
          <div className="nav-right">
            <button className='call-p' onClick={toggleOrderCall}>Заказать звонок</button>
            <button className='call-cont' onClick={toggleOrderCall}><img src='./call.svg' alt='' /></button>
          </div>
        </div>
        <hr />
      </div>
      <div className="nav-bottom">
        <div className="nav-toggle" onClick={toggleMenu}>
          <img src="./menu.svg" alt="Menu" />
        </div>
        <ul>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>ГЛАВНАЯ</Link></li>
          <li><Link to='programs' smooth={true} offset={0} duration={500}>SPA-ПРОГРАММЫ</Link></li>
          <li><Link to='massage' smooth={true} offset={0} duration={500}>ТАЙСКИЙ МАССАЖ</Link></li>
          <li><Link to='certificates' smooth={true} offset={0} duration={500}>СЕРТИФИКАТЫ</Link></li>
          <li><Link to='abonements' smooth={true} offset={0} duration={500}>КУРСЫ</Link></li>
          <li><Link to='masters' smooth={true} offset={0} duration={500}>МАСТЕРА</Link></li>
          <li><Link to='contacts' smooth={true} offset={0} duration={500}>КОНТАКТЫ</Link></li>
        </ul>
      </div>
      {isOrderCallOpen && <OrderCall onClose={toggleOrderCall} />}
    </nav>
  );
};

export default Navbar;
