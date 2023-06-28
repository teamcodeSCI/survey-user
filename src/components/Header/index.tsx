import React from 'react';
import style from './header.module.scss';
import { useSelector } from 'react-redux';
import { backgroundSelector, logoSelector, phoneSelector } from '@/features/brand/brandSlice';
import { formatPhoneNumber } from '@/utils/const';

const Header = () => {
  const phone = useSelector(phoneSelector);
  const background = useSelector(backgroundSelector);
  const logo = useSelector(logoSelector);
  return (
    <div className={style['main']}>
      <div className="container">
        <div className={style['box']}>
          <div className={style['logo']}>
            <img width={300} height={110} src={logo} alt="" />
          </div>
          <div className={style['contact']}>
            <button style={{ background: background }}>{formatPhoneNumber(phone)}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
