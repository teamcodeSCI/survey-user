import { createAsyncThunk } from '@reduxjs/toolkit';
import http from './http';
import { TOKEN } from '@/utils/const';

export const fetchSurvey = createAsyncThunk('survey/fetchSurvey', async (id: number) => {
  return await http.get(`/get-survey?token=${TOKEN}&id=${id}`);
});
export const postSurvey = createAsyncThunk('survey/postSurvey', async (survey: any[]) => {
  console.log(JSON.stringify(survey));
  return await http.get(`/create-survey-user-input-web?token=${TOKEN}&user_input_line_ids=${JSON.stringify(survey)}`);
});
