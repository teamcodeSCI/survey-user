import React, { useState } from 'react'
import style from './checkboxAnswer.module.scss'
import { AnswerType } from '@/models/survey'

const CheckboxAnswer = ({ item, handleCheckboxChange, currentItem, updateAnswers, check, setCheck }:
    { item: any, handleCheckboxChange: any, currentItem: any, updateAnswers: any, check: boolean, setCheck: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const [select, setIsSelect] = useState(false)
    const [answer, setAnswer] = useState<AnswerType>({
        id: currentItem.survey_id,
        state: 'done',
        question_id: currentItem.id,
        suggested_answer_id: 0,
        matrix_row_id: 0,
        answer_type: currentItem.question_type,
        value_datetime: '',
        value_date: '',
        value_text_box: '',
        value_numberical_box: '',
        value_char_box: '', value_comment: ''
    })


    return (
        <div className={style['checkboxAnswer']}>
            <div className={style['inputGroup']}>
                <input type="checkbox" name='suggested_answer_id' id={'answer' + item.id} value={item.id} checked={item.value === "Không có ý kiến gì" ? select : !check && select} onChange={((e: any) => {
                    if (item.value === "Không có ý kiến gì") {
                        setCheck(!check)
                    }
                    setIsSelect(e.target.checked)
                    handleCheckboxChange({
                        id: currentItem.survey_id,
                        state: 'done',
                        question_id: currentItem.id,
                        suggested_answer_id: Number(e.target.value),
                        matrix_row_id: 0,
                        answer_type: currentItem.question_type,
                        value_datetime: '',
                        value_date: '',
                        value_text_box: '',
                        value_numberical_box: '',
                        value_char_box: '',
                        value_comment: ''
                    })
                    setAnswer({ ...answer, suggested_answer_id: Number(e.target.value) })

                })} />
                <label
                    style={item.value !== "Không có ý kiến gì" ? {} : { color: 'red', fontWeight: 600 }}
                    htmlFor={'answer' + item.id}>
                    {item.value}
                </label>
            </div>

            {!check && select && item.value !== "Không có ý kiến gì" &&
                <div className={style['reason']}>
                    <textarea rows={1} onChange={(e) => {

                        setAnswer({ ...answer, value_comment: e.target.value })
                        updateAnswers(answer.suggested_answer_id, { ...answer, value_comment: e.target.value })

                    }} value={answer.value_comment} name='value_comment' placeholder='Nhập lý do...'></textarea>
                </div>}
        </div>
    )
}

export default CheckboxAnswer