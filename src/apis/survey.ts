import { createAsyncThunk } from '@reduxjs/toolkit';
import http from './http';
import { TOKEN } from '@/utils/const';

export const fetchSurvey = createAsyncThunk('survey/fetchSurvey', async (id: number) => {
  return await http.get(`/get-survey?token=${TOKEN}&id=${id}`);
});
export const postSurvey = createAsyncThunk('survey/postSurvey', async (survey: any) => {
  console.log('survey: ', survey);
  const res = await fetch('https://dev.scigroup.com.vn/api/v1/create-survey-user-input-web', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: TOKEN,
    },

    body: JSON.stringify(survey),
    redirect: 'follow',
  });
  return await res.json();
});
