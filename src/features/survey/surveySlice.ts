import { fetchSurvey } from '@/apis/survey';
import { RootState } from '@/app/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loaded: false,
  loading: false,

  surveyId: '',
  brandCode: '',
  questionList: [],
};

const surveySLice = createSlice({
  name: 'survey',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSurvey.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchSurvey.fulfilled, (state, action: any) => {
        state.loading = false;
        if (action.payload.data.data) {
          state.loaded = true;
          state.brandCode = action.payload.data.data[0].brand_code;
          state.surveyId = action.payload.data.data[0].id;
          state.questionList = action.payload.data.data[0].question_ids;
        }
      })
      .addCase(fetchSurvey.rejected, (state, action) => {
        state.loading = false;
        state.loaded = false;
      });
  },
});
export default surveySLice;
export const questionListSelector = (state: RootState) => state.survey.questionList;
export const brandCodeSelector = (state: RootState) => state.survey.brandCode;
export const loadedSurveySelector = (state: RootState) => state.survey.loaded;
export const loadingSurveySelector = (state: RootState) => state.survey.loading;
