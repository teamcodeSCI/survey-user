import { createAsyncThunk } from '@reduxjs/toolkit';
import http from './http';
import { TOKEN } from '@/utils/const';
import { PostSurvey } from '@/models/survey';

export const fetchSurvey = createAsyncThunk('survey/fetchSurvey', async (id: number) => {
  return await http.get(`/get-survey?token=${TOKEN}&id=${id}`);
});
export const postSurvey = createAsyncThunk('survey/postSurvey', async (survey: PostSurvey) => {
  return await http.get(`/create-survey-user-input-web?token=${TOKEN}&
    question_id=${survey.question_id}&
    suggested_answer_id=${survey.suggested_answer_id}&
    matrix_row_id=${survey.matrix_row_id}&
    answer_type=${survey.answer_type}&
    value_datetime=${survey.value_datetime}&
    value_date=${survey.value_date}&
    value_text_box=${survey.value_text_box}&
    value_numberical_box=${survey.value_numberical_box}&
    value_char_box=${survey.value_char_box}&
    id=${survey.id}&
    state=${survey.state}`);
});
