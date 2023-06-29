import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import brandSlice from '../features/brand/brandSlice';
import surveySLice from '@/features/survey/surveySlice';

const rootReducer = combineReducers({
  brand: brandSlice.reducer,
  survey: surveySLice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
