import React from 'react';
import './../Styles/ModalItem.css';

const ModalItem = ({ program, onClose }) => {
  return (
    <div className='modal-item'>
      <div className="modal-item-list">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="modal-content">
          <div className="modal-script">
            <p>{program.description}</p>
            {program.description2 && <p>{program.description2}</p>}
            {program.description3 && <p>{program.description3}</p>}
            {program.description4 && <p>{program.description4}</p>}
            {program.description5 && <p>{program.description5}</p>}
            {program.description6 && <p>{program.description6}</p>}
            <hr />
          </div>
          <div className="duration">
            <p>Длительность: {program.time}</p>
            <p>Цена: {program.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalItem;
