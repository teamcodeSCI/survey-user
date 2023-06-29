import React, { useState } from 'react';
import style from './feedback.module.scss';
import { useSelector } from 'react-redux';
import { backgroundSelector, logoSelector, nameSelector, phoneSelector } from '@/features/brand/brandSlice';

interface InfoState {
  name: string;
  phone: string;
  feedback: string;
}

const Feedback = () => {
  const name = useSelector(nameSelector);
  const backgroundColor = useSelector(backgroundSelector);
  const logo = useSelector(logoSelector);
  const phone = useSelector(phoneSelector);
  const [info, setInfo] = useState<InfoState>({ name: '', phone: '', feedback: '' });
  const [error, setError] = useState<string>('');
  const handleCall = () => {
    window.location.href = `tel:${phone}`;
  };
  const handleInfo = (e: any) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    if (info.name === '' || info.phone === '' || info.feedback === '') {
      setError('Vui lòng nhập đủ thông tin !');
      return;
    }
    setError('');
  };
  return (
    <div className={style['feedback']}>
      <div className={style['desc']}>
        <img src={logo} alt="" />
        <p>
          Xin chào quý khách ! <br /> Cảm ơn Quý khách đã sử dụng dịch vụ của {name}. <br />
          Chúng tôi vô cùng biết ơn nếu bạn để lại nhận xét về trải nghiệm của bạn tại đây !
        </p>
        <span>
          <i>Hotline:</i>
          <b style={{ color: backgroundColor }} onClick={handleCall}>
            {phone}
          </b>
        </span>
      </div>
      <div className={style['box']}>
        <span style={{ color: backgroundColor }}>Góp ý phản hồi</span>
        <div className={style['form']}>
          <input type="text" name="name" placeholder="Họ và tên" value={info.name} onChange={handleInfo} />
          <input type="text" name="phone" placeholder="Số điện thoại" value={info.phone} onChange={handleInfo} />
          <textarea
            name="feedback"
            rows={10}
            placeholder="Nội dung phản ánh"
            onChange={handleInfo}
            value={info.feedback}
          >
            {info.feedback}
          </textarea>
        </div>
        <div className={style['btn']}>
          {error !== '' && <p>{error}</p>}
          <button style={{ background: backgroundColor }} onClick={handleSave}>
            Gửi phản ánh
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
