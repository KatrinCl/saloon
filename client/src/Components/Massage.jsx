import React, { useState, useEffect } from 'react';
import './../Styles/Massage.css';
import MassageDisplay from './MassageDisplay';
import ExploreMassage from './ExploreMassage';

const Massage = () => {

    const [massage, setMassage] = useState(() => {
        return localStorage.getItem('selectedMassage') || 'Тайский массаж';
    });

    useEffect(() => {
        localStorage.setItem('selectedMassage', massage);
    }, [massage]);

    return (
        <div className='massage'>
            <div className='massage-content'>
                <div className="massage-description">
                    <div className='massage-text'>
                        <h2>ТАЙСКИЙ МАССАЖ</h2>
                        <p>От сертифицированных мастеров из Тайланда</p>
                    </div>
                    <hr />
                </div>

                <div className="massage-list">
                    <MassageDisplay massage={massage} />
                    <ExploreMassage massage={massage} setMassage={setMassage} />
                </div>
            </div>
        </div>
    );
}

export default Massage;
