import React, { useState, useEffect } from 'react';
import './../Styles/Masters.css';
import ExploreMasters from './ExploreMasters';
import MastersDisplay from './MastersDisplay';

const Masters = () => {

    const [category, setCategory] = useState(() => {
        return localStorage.getItem('selectedMaster') || 'Мастер Нари';
    });

    useEffect(() => {
        localStorage.setItem('selectedMaster', category);
    }, [category]);

    return (
        <div className='masters'>
            <div className='master-content'>
                <div className="masters-description">
                    <div className='master-text'>
                        <h2>НАШИ МАСТЕРА</h2>
                        <p>Все процедуры оказывают только сертифицированные мастера из Тайланда</p>
                    </div>
                    <hr />
                </div>

                <div className="masters-list">
                    <MastersDisplay category={category} />
                    <ExploreMasters category={category} setCategory={setCategory} />
                </div>
            </div>
        </div>
    )
}

export default Masters;
