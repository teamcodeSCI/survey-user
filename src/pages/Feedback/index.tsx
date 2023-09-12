import React, { useState } from 'react';
import style from './feedback.module.scss';

import { backgroundSelector, logoSelector, nameSelector, phoneSelector } from '@/features/brand/brandSlice';
import { Navigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { createFeedback } from '@/apis/feedback';
import { InfoState } from '@/models/feedback';
import { loadedFeedbackSelector, loadingFeedbackSelector, resultFeedbackSelector } from '@/features/feedback/feedbackSlice';
import Loading from '@/components/Loading';

const Feedback = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');

  const companyId = searchParams.get('company_id');
  const brandCode = searchParams.get('brand_code');
  const result = useAppSelector(resultFeedbackSelector);
  const loaded = useAppSelector(loadedFeedbackSelector);
  const loadingFeedback = useAppSelector(loadingFeedbackSelector);
  const name = useAppSelector(nameSelector);
  const backgroundColor = useAppSelector(backgroundSelector);
  const logo = useAppSelector(logoSelector);
  const phone = useAppSelector(phoneSelector);
  const [info, setInfo] = useState<InfoState>({
    name: '',
    phone: '',
    content: '',
    type: type || '',
    company_id: Number(companyId),
  });
  const [error, setError] = useState<string>('');
  const handleCall = () => {
    window.location.href = `tel:${phone}`;
  };
  const handleInfo = (e: any) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    if (info.name === '' || info.phone === '' || info.content === '') {
      setError('Vui lòng nhập đủ thông tin !');
      return;
    }
    setError('');
    dispatch(createFeedback(info));
  };
  return (
    <>
      {loaded && result === 'Done' ? (
        <Navigate to={`/ending?brand_code=${brandCode}`} />
      ) : (
        <div className={style['feedback']}>
          {loadingFeedback && <Loading />}
          <div className={style['desc']}>
            <img src={logo} alt="" />
            <p>
              <b> Xin chào quý khách ! </b>
              <br /> Cảm ơn Quý khách đã sử dụng dịch vụ của {name}. <br />
              Chúng tôi vô cùng biết ơn nếu bạn để lại nhận xét về trải nghiệm của bạn tại đây !
            </p>
            <span>
              <i>Hotline:</i>
              <b style={{ color: backgroundColor }} onClick={handleCall}>
                {' ' + phone}
              </b>
            </span>
          </div>
          <div className={style['box']}>
            <span style={{ color: backgroundColor }}>Góp ý phản hồi</span>
            <div className={style['form']}>
              <input
                type="text"
                name="name"
                autoComplete="off"
                placeholder="Họ và tên"
                value={info.name}
                onChange={handleInfo}
              />
              <input
                type="text"
                name="phone"
                autoComplete="off"
                placeholder="Số điện thoại"
                value={info.phone}
                onChange={handleInfo}
              />
              <textarea
                name="content"
                rows={10}
                placeholder="Nội dung phản ánh"
                onChange={handleInfo}
                value={info.content}
              >
                {info.content}
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
      )}
    </>
  );
};

export default Feedback;
