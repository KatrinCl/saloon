import React from 'react'
import { master_list } from '../../public/assets'
import MasterItem from './MasterItem';


const MastersDisplay = ({category}) => {
  return (
    <div className="master-display">
    <div className='master-display-list'>
            {master_list.map((item,index)=>{
                if (category===item.name) {
                return <MasterItem key={index} name={item.name} description={item.description} image={item.image} />
                }
            })}
    </div>
    </div>
  )
}

export default MastersDisplay