import React from 'react'
import './../Styles/MassageItem.css'

const MassageItem = ({ name, price, image }) => {
    return (
        <div className='massage-item'>
            <div className='item-content'>
                <div className="massage-item-left">
                    <p className='massage-item-name'>{name}</p>
                    <p className='massage-item-desc'>{price}</p>
                </div>

                <div className="massage-item-right">
                    <img className='massage-item-image' src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MassageItem