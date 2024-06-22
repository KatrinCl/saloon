import React from 'react';
import './../Styles/ExploreMasters.css';
import { masters_list } from '../../public/assets';

const ExploreMasters = ({ category, setCategory }) => {

    return (
        <div className='explore-masters'>
            <hr className='hr1'/>
            <div className='explore-master-list'>
                {masters_list.map((item, index) => {
                    return (
                        <div 
                            className="explore-master-list-item" 
                            onClick={() => {
                                setCategory(item.master_name);
                                localStorage.setItem('selectedMaster', item.master_name);
                            }}
                            key={index}
                        >
                            <p className={category === item.master_name ? "active" : ""}>
                                {item.master_name}
                            </p>
                        </div>
                    );
                })}
            </div>
            <hr className='hr2'/>
        </div>
    )
}

export default ExploreMasters;
