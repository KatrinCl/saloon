import React from 'react'
import './../Styles/MasterItem.css'

const MasterItem = ({ name, description, image }) => {
    return (
        <div className='master-item'>
            <div className='master-item-content'>
                <div className="master-item-left">
                    <p className='master-item-name'>{name}</p>
                    <p className='master-item-desc'>{description}</p>
                </div>

                <div className="master-item-right">
                    <img className='master-item-image' src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MasterItem