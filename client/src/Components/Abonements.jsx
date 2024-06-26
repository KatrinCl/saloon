import React, { useRef } from 'react';
import './../Styles/Abonements.css';
import Slide from './Slide';

const Abonements = () => {
  const slidesData = [
    {
      title: 'ПЕРЕЗАГРУЗКА',
      details: [
        { description: 'SPA "Король манго"', frequency: '1 раз' },
        { description: 'SPA "Шоколадное блаженство"', frequency: '1 раз' },
        { description: 'Процедуры relax массажа. Балийский, тайский или ломи-ломи на выбор', frequency: '1 ч х / 5 раз' }
      ],
      price: '31 000'
    },
    {
      title: 'СИЛА ТИГРА',
      details: [
        { description: 'Секрет спортсмена', frequency: '1,5 ч х / 2 раза' },
        { description: 'Тайский традиционный массаж', frequency: '1 ч х / 2 раза' },
        { description: 'Массаж Шиацу', frequency: '1 ч х / 2 раза' },
        { description: 'Спортивный массаж', frequency: '1 ч х / 2 раза' }
      ],
      price: '32 400'
    },
    {
      title: 'СТРОЙНОСТЬ',
      details: [
        { description: 'SPA "Сила трех океанов" в начале и в конце курса', frequency: '2 раза' },
        { description: 'Slim массаж', frequency: '1 ч х / 8 раз' },
        { description: 'Рекомендуется делать 2 процедуры в неделю для достижения максимального эффекта', frequency: '1 ч' }
      ],
      price: '45 800'
    },
    {
      title: 'ЛЮБЛЮ СЕБЯ',
      details: [
        { description: 'SPA для тела на выбор', frequency: '1 раз' },
        { description: 'Массаж Ломи-Ломи с маской для лица', frequency: '1 ч' },
        { description: 'SPA для лица и SPA с травяными мешочками', frequency: 'по 1 разу' },
        { description: 'Массаж головы', frequency: '30 мин' },
        { description: 'Скраб-пилинг "Обновление"', frequency: '1 ч' }
      ],
      price: '24 800'
    },
    {
      title: 'ЗНАКОМСТВО',
      details: [
        { description: '4 вида разных массажей', frequency: '4 ч х 3 800 р.' },
        { description: 'Массаж горячими камнями "Stone массаж"', frequency: 'или' },
        { description: 'Тайский массаж горячими травяными мешочками', frequency: '1 ч' },
        { description: 'Массаж головы', frequency: '30 мин' },
        { description: 'Скраб-пилинг "Обновление"', frequency: '1 ч' }
      ],
      price: '18 720'
    }
  ];
  
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -350) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='abonements'>
      <div className="abonements-container">
        <img src="./back.svg" alt="" className='next-btn' onClick={slideForward} />
        <img src="./back.svg" alt="" className='back-btn' onClick={slideBackward} />
        <h2>КУРСЫ МАССАЖА</h2>

        <div className="slider">
          <ul ref={slider}>
            {slidesData.map((slide, index) => (
              <Slide key={index} slide={slide} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Abonements;
