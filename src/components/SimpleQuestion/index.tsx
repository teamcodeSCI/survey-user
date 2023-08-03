import React from 'react'
import style from './simpleQuestion.module.scss'

const SimpleQuestion = ({ question, answer }: { question: string, answer: any[] }) => {
  return (
    <div className={style['simpleQuestion']}>
      <p>{question}</p>
      <div className={style['answer']}>
        {answer.map((item, idx: number) =>
          <div key={item.value} className={style['item']}>
            <input type="radio" name='answer' id={'answer' + idx} value={item.value} />
            <label htmlFor={'answer' + idx}>{item.value}</label>
          </div>
        )}
      </div>
    </div>
  )
}

export default SimpleQuestion