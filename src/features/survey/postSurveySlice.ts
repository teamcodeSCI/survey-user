import { postSurvey } from '@/apis/survey';
import { RootState } from '@/app/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loaded: false,
  loading: false,
  result: null,
  answerList: [],
};
const postSurveySLice = createSlice({
  name: 'postSurvey',
  initialState,
  reducers: {
    addSurvey: (state, action) => {
      state.answerList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postSurvey.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(postSurvey.fulfilled, (state, action: any) => {
        state.loading = false;
        state.loaded = true;
        state.result = action.payload.data;
      })
      .addCase(postSurvey.rejected, (state, action) => {
        state.loading = false;
        state.loaded = false;
      });
  },
});
export default postSurveySLice;
export const loadedPostSurveySelector = (state: RootState) => state.postSurvey.loaded;
export const loadingPostSurveySelector = (state: RootState) => state.postSurvey.loading;
