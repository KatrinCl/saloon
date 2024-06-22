import React from 'react'
import './../Styles/Hero.css'
import { Link } from 'react-scroll';


const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-content'>
                <div className="hero-text">
                    <h1>SPA САЛОН</h1>
                    <p>Профессиональный подход к телу</p>
                </div>

                <div className="hero-offer">
                    <button><Link to='programs'>Выбрать SPA-программу</Link></button>
                    <button><Link to='massage'>Выбрать массаж</Link></button>
                    <button><Link to='abonements'>Посмотреть абонементы</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Hero