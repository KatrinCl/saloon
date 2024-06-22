import React from 'react'
import MassageItem from './MassageItem'
import { price_list } from '../../public/assets'

const MassageDisplay = ({massage}) => {
  return (
    <div className="massage-display">
    <div className='massage-display-list'>
            {price_list.map((item,index)=>{
                if (massage===item.name) {
                return <MassageItem key={index} name={item.name} price={item.price} image={item.image} />
                }
            })}
    </div>
    </div>
  )
}

export default MassageDisplay