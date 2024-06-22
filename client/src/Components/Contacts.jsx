import React from 'react'
import './../Styles/Contacts.css'
import Footer from './Footer'

const Contacts = () => {
    return (
        <div className='contacts'>
            <div className='contacts-content'>
                <div className='contacts-container'>
                    <h2>МЫ ЖДЕМ ВАС!</h2>
                    <hr />
                    <div className='conts'>
                        <div>
                            <h3><img src="./call.svg" alt="" /> +7-901-285-3563</h3>
                            <p>Ежедневно с 10:00 до 22:00</p>
                        </div>
                        <div>
                            <h4><img src="./location.svg" alt="" /> Москва, Верхняя ул.,20</h4>
                        </div>
                        <div>
                            <h4><img src="./envelope.svg" alt="" /> katrin190544@mail.ru</h4>
                        </div>
                    </div>
                </div>

                <div className="map-responsive">
                    <iframe width="520" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,%20%D0%92%D0%B5%D1%80%D1%85%D0%BD%D1%8F%D1%8F%20%D1%83%D0%BB.,20+(Essence)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
                </div>
                </div>


                <div className="footer-list">
                    <Footer />
                </div>
        </div>
    )
}

export default Contacts