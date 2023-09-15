import { createAsyncThunk } from '@reduxjs/toolkit';
import http from './http';
import { TOKEN } from '@/utils/const';

export const fetchSurvey = createAsyncThunk('survey/fetchSurvey', async (id: number) => {
  return await http.get(`/get-survey?token=${TOKEN}&id=${id}`);
});
export const postSurvey = createAsyncThunk('survey/postSurvey', async (survey: any) => {
  const res = await fetch('https://dev.scigroup.com.vn/api/v1/create-survey-user-input-web', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(survey), // body data type must match "Content-Type" header
  });
  return await res.json();
});
