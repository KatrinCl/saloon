import React, { useState } from 'react';
import './../Styles/Programs.css';
import ModalItem from './ModalItem';
import { spa_list } from '../../public/assets';

const Programs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const openModal = (program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProgram(null);
  };

  return (
    <div className='programs'>
        <h1>SPA-ПРОГРАММЫ</h1>
        <hr/>
        <div className="programs-form">
            <ul>
                {spa_list.map((program, index) => (
                  <li key={index}>
                    {program.name} 
                    <img onClick={() => openModal(program)} src='./circle_plus.svg' alt=''/>
                  </li>
                ))}
            </ul>
        </div>
        {isModalOpen && <ModalItem program={selectedProgram} onClose={closeModal} />}
    </div>
  );
}

export default Programs;
