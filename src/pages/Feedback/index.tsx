import React, { useRef, useState } from 'react';
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
  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)

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
    if (e.target.name === 'phone') {
      const phonePattern = /^\d{10}$/;
      const isValidPhone = phonePattern.test(e.target.value);
      if (!isValidPhone) {
        setError('Số điện thoại không hợp lệ !')
      } else {
        setError('')
      }
    }
    setInfo({ ...info, [e.target.name]: e.target.value });

  };
  const handleSave = () => {
    const infoArr = [{ data: info.name, ref: nameRef }, { data: info.phone, ref: phoneRef }, { data: info.content, ref: contentRef }]
    infoArr.forEach((item: any) => {
      if (item.data === '') {
        item.ref.current.style.border = '1px solid red'
      } else {
        item.ref.current.style.border = '1px solid transparent'
      }
    })
    if (info.name === '' || info.phone === '' || info.content === '') {
      setError('Vui lòng nhập đủ thông tin !');
      return;
    } if (error !== '') {
      setError(error);
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
            <div className={style['pc']}>
              <img className={style['logo']} src={logo} alt="logo" />
            </div>
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
            <div className={style['mb']}>
              <img className={style['logo']} src={logo} alt="logo" />
            </div>
            <span style={{ color: backgroundColor }}>Phản ánh/Góp ý của khách hàng</span>
            <div className={style['form']}>
              <textarea
                name="content"
                rows={6}
                placeholder="Nội dung phản ánh"
                onChange={handleInfo}
                value={info.content}
                ref={contentRef}
              >
                {info.content}
              </textarea>
              <input
                type="text"
                name="name"
                autoComplete="off"
                placeholder="Họ và tên"
                value={info.name}
                onChange={handleInfo}
                ref={nameRef}
              />
              <input
                type="text"
                name="phone"
                autoComplete="off"
                placeholder="Số điện thoại"
                value={info.phone}
                onChange={handleInfo}
                ref={phoneRef}
              />

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
