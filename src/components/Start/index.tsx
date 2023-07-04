import React from 'react';
import style from './start.module.scss';
import { useAppSelector } from '@/app/hooks';
import { backgroundSelector, logoSelector, nameSelector } from '@/features/brand/brandSlice';

const Start = () => {
  const logo = useAppSelector(logoSelector);
  const name = useAppSelector(nameSelector);
  const background = useAppSelector(backgroundSelector);
  return (
    <div className={style['start']}>
      <div className={style['logo']}>
        <img src={logo} alt="" />
      </div>
      <p>
        {name} trân trọng cảm ơn quý khách hàng <br /> đã đồng hành cùng chúng tôi trong suốt thời gian qua
      </p>
      <button style={{ background: background }}>Bắt đầu khảo sát</button>
    </div>
  );
};

export default Start;
