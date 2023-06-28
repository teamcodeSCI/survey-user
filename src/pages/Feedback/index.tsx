import React from 'react';
import style from './feedback.module.scss';
import { useSelector } from 'react-redux';
import { backgroundSelector, logoSelector, nameSelector, phoneSelector } from '@/features/brand/brandSlice';

const Feedback = () => {
  const name = useSelector(nameSelector);
  const backgroundColor = useSelector(backgroundSelector);
  const logo = useSelector(logoSelector);
  const phone = useSelector(phoneSelector);
  return (
    <div className={style['feedback']}>
      <div className={style['desc']}>
        <img src={logo} alt="" />
        <p>
          Xin chào quý khách ! <br /> Cảm ơn Quý khách đã sử dụng dịch vụ của {name}. <br />
          Chúng tôi vô cùng biết ơn nếu bạn để lại nhận xét về trải nghiệm của bạn tại đây !
        </p>
        <span>
          <i>Hotline:</i> <b style={{ color: backgroundColor }}>{phone}</b>
        </span>
      </div>
      <div className={style['box']}>
        <span style={{ color: backgroundColor }}>Góp ý phản hồi</span>
        <div className={style['form']}>
          <input type="text" name="name" placeholder="Họ và tên" />
          <input type="text" name="phone" placeholder="Số điện thoại" />
          <textarea name="desc" rows={10} placeholder="Nội dung phản ánh"></textarea>
        </div>
        <div className={style['btn']}>
          <button style={{ background: backgroundColor }}>Gửi phản ánh</button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
