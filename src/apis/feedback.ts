import { createAsyncThunk } from '@reduxjs/toolkit';
import http from './http';
import { TOKEN } from '@/utils/const';
import { InfoState } from '@/models/feedback';

// export const createFeedback = createAsyncThunk(
//   'feedback/createFeedback',
//   async (body: InfoState) =>
//     await http.get(
//       `/create-case-survey?token=${TOKEN}&name=${body.name}&phone=${body.phone}&content=${body.content}&company_id=${body.company_id}&type=${body.type}`,
//     ),
// );
export const createFeedback = createAsyncThunk('feedback/createFeedback', async (body: InfoState) => {
  const res = await fetch('https://dev.scigroup.com.vn/api/v1/create-crm-case-survey', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: TOKEN,
    },

    body: JSON.stringify(body),
  });
  return await res.json();
});
