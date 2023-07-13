import { createFeedback } from '@/apis/feedback';
import { RootState } from '@/app/store';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  loading: boolean;
  loaded: boolean;
  result: string;
}
const initialState: InitialState = {
  loading: false,
  loaded: false,
  result: '',
};
const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createFeedback.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createFeedback.fulfilled, (state, action: any) => {
        state.loading = false;
        state.loaded = true;
        state.result = action.payload.data.result;
      })
      .addCase(createFeedback.rejected, (state, action) => {
        state.loading = false;
        state.loaded = false;
      });
  },
});
export default feedbackSlice;

export const loadingFeedbackSelector = (state: RootState) => state.feedback.loading;
export const loadedFeedbackSelector = (state: RootState) => state.feedback.loaded;
export const resultFeedbackSelector = (state: RootState) => state.feedback.result;
