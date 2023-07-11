import React from 'react';
import style from './start.module.scss';
import { useAppSelector } from '@/app/hooks';
import { backgroundSelector, logoSelector, nameSelector } from '@/features/brand/brandSlice';
interface StartProps {
  handleIsStart: React.MouseEventHandler;
}
const Start = ({ handleIsStart }: StartProps) => {
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
      <button style={{ background: background }} onClick={handleIsStart}>
        Bắt đầu khảo sát
      </button>
    </div>
  );
};

export default Start;
