import React from 'react'
import './../Styles/Footer.css'
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className='footer'>
            <hr />
            <div className="footer-content">

                <div className="footer-left">
                    <div className="footer-img">
                        <img src="./logo.png" alt="" />
                        <div className='footer-text'>
                            <h1>Essence</h1>
                            <p className='notice'>beauty & spa</p>
                        </div>
                    </div>
                    <p className='footer-copyright'>Copyright 2024 ©️ Essence.com - All Rights Reserved.</p>
                </div>

                <div className="footer-right">
                    <ul>
                        <li><Link to='programs' smooth={true} offset={0} duration={500}>SPA-программы</Link></li>
                        <li><Link to='massage' smooth={true} offset={0} duration={500}>Тайский массаж</Link></li>
                        <li><Link to='certificates' smooth={true} offset={0} duration={500}>Сертификаты</Link></li>
                        <li><Link to='abonements' smooth={true} offset={0} duration={500}>Курсы</Link></li>
                        <li><Link to='masters' smooth={true} offset={0} duration={500}>Мастера</Link></li>
                        <li><Link to='contacts' smooth={true} offset={0} duration={500}>Контакты</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer