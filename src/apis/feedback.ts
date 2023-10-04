import { createAsyncThunk } from '@reduxjs/toolkit';
import http from './http';
import { TOKEN } from '@/utils/const';
import { InfoState } from '@/models/feedback';

export const createFeedback = createAsyncThunk(
  'feedback/createFeedback',
  async (body: InfoState) =>
    await http.get(
      `/create-case-survey?token=${TOKEN}&name=${body.name?.replace(/[<>[\]+'"#&]/g, '')}&phone=${
        body.phone
      }&content=${body.content?.replace(/[<>[\]+'"#&]/g, '')}&company_id=${body.company_id}&type=${body.type}`,
    ),
);
