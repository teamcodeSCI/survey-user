import React from 'react';
import style from './ending.module.scss';
import { backgroundSelector, logoSelector, nameSelector, phoneSelector } from '@/features/brand/brandSlice';
import { useSelector } from 'react-redux';

const Ending = () => {
  const name = useSelector(nameSelector);
  const backgroundColor = useSelector(backgroundSelector);
  const logo = useSelector(logoSelector);
  const phone = useSelector(phoneSelector);
  const handleCall = () => {
    window.location.href = `tel:${phone}`;
  };
  return (
    <div className={style['ending']}>
      <div className={style['img']}>
        <img src={logo} alt="" />
      </div>
      <div className={style['text']}>
        {name} chân thành cảm ơn sự góp ý/ phản hồi của Quý khách hàng <br /> Sự góp ý/ phản hồi của Quý khách hàng sẽ
        giúp chúng tôi cải thiện chất lượng dịch vụ, phục vụ, nâng cao trải nghiệm khách hàng. <br /> Trân trọng !
        <p>
          <i>Hotline:</i>
          <b style={{ color: backgroundColor }} onClick={handleCall}>
            {' ' + phone}
          </b>
        </p>
      </div>
    </div>
  );
};

export default Ending;
