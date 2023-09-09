import React, { useState } from 'react'
import style from './checkboxAnswer.module.scss'

const CheckboxAnswer = ({ item, handleAnswer, answerArr }: { item: any, handleAnswer: any, answerArr: any }) => {
    console.log("item: ", item);
    const [select, setIsSelect] = useState(false)
    const [answer, setAnswer] = useState({ suggested_answer_id: '', value_comment: '' })

    const handleAnswers = (e: any) => {
        setAnswer({ ...answer, suggested_answer_id: e.target.value })
        setIsSelect(e.target.checked)
        if (e.target.checked)
            handleAnswer([...answerArr, answer])
    }
    const handleComment = (e: any) => {
        setAnswer({ ...answer, value_comment: e.target.value })
    }
    return (
        <div className={style['checkboxAnswer']}>
            <div className={style['inputGroup']}>
                <input type="checkbox" name='suggested_answer_id' id={'answer' + item.id} value={item.id} onChange={handleAnswers} />
                <label
                    style={item.value !== "Không có ý kiến gì" ? {} : { color: 'red', fontWeight: 600 }}
                    htmlFor={'answer' + item.id}>
                    {item.value}
                </label>
            </div>

            {select && item.value !== "Không có ý kiến gì" &&
                <div className={style['reason']}>
                    <textarea rows={1} onChange={handleComment} name='value_comment' placeholder='Nhập lý do...'></textarea>
                </div>}
        </div>
    )
}

export default CheckboxAnswer