import { RootState } from '@/app/store';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  loading: boolean;
  loaded: boolean;
}
const initialState: InitialState = {
  loading: false,
  loaded: false,
};
const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {},
  extraReducers(builder) {},
});
export default feedbackSlice;

export const loadingFeedbackSelector = (state: RootState) => state.feedback.loading;
export const loadedFeedbackSelector = (state: RootState) => state.feedback.loaded;
