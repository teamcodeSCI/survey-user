import { createAsyncThunk } from '@reduxjs/toolkit';
import http from './http';
import { TOKEN } from '@/utils/const';

export const fetchSurvey = createAsyncThunk('survey/fetchSurvey', async (id: number) => {
  return await http.get(`/get-survey?token=${TOKEN}&id=${id}`);
});
