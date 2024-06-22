import React from 'react';
import './../Styles/Modal.css';
import { spa_list } from '../../public/assets';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="modal-content">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;
