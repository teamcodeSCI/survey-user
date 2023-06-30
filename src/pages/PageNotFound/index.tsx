import React from 'react';
import style from './pageNotFound.module.scss';
import { PUBLIC_URL } from '@/utils/const';

const PageNotFound = () => {
  return (
    <div className={style['pageNotFound']}>
      <div className={style['box']}>
        <img width={857} height={763} src={`${PUBLIC_URL}/assets/images/page-not-found.jpg`} alt="" />
      </div>
    </div>
  );
};

export default PageNotFound;
