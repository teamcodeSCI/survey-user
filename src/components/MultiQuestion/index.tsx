import React from 'react'
import style from './multiQuestion.module.scss'

const MultiQuestion = ({ currentItem }: { currentItem: any }) => {

  return (
    <div className={style['multiQuestion']}>
      <p>{currentItem.title}</p>
      <div className={style['answer']}>
        {currentItem.answer.map((item: any, idx: number) =>
          <div key={item.value} className={style['item']}>
            <input type="checkbox" id={'answer' + idx} value={item.value} />
            <label htmlFor={'answer' + idx}>{item.value}</label>
          </div>
        )}
      </div>
    </div>
  )
}

export default MultiQuestion