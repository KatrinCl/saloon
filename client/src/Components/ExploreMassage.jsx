import React from 'react';
import './../Styles/ExploreMassage.css';
import { massage_list } from '../../public/assets';

const ExploreMassage = ({ massage, setMassage }) => {

    return (
        <div className='explore-massage'>
            <hr className='hr3'/>
            <div className='explore-massage-list'>
                {massage_list.map((item, index) => {
                    return (
                        <div 
                            className="explore-massage-list-item" 
                            onClick={() => {
                                setMassage(item.massage_name);
                                localStorage.setItem('selectedMassage', item.massage_name);
                            }} 
                            key={index} 
                        >
                            <p className={massage === item.massage_name ? "active" : ""}>
                                {item.massage_name}
                            </p>
                            <a href='#explore-massage' className={massage === item.massage_name ? "active" : ""}></a>
                        </div>
                    );
                })}
            </div>
            <hr className='hr4'/>
        </div>
    )
}

export default ExploreMassage;
