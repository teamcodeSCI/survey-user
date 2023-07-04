import React from 'react';
import style from './reactQuestion.module.scss';
import { useAppSelector } from '@/app/hooks';
import { backgroundSelector, logoSelector } from '@/features/brand/brandSlice';

const ReactQuestion = () => {
  const logo = useAppSelector(logoSelector);

  const background = useAppSelector(backgroundSelector);
  return (
    <div className={style['react']}>
      <div className={style['logo']}>
        <img src={logo} alt="" />
      </div>
      <p>1. Quý khách có trải nghiệm dịch vụ như thế nào?</p>
      <div className="answer">
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <button style={{ background: background }}>Bắt đầu khảo sát</button>
    </div>
  );
};

export default ReactQuestion;
