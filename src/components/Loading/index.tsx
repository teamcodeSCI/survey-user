import React from 'react';
import style from './loading.module.scss';

const Loading = () => {
  return (
    <div className={style['loading']}>
      <div className={style['item']}></div>
    </div>
  );
};

export default Loading;
