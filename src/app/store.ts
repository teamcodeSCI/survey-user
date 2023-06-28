import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import brandSlice from '../features/brand/brandSlice';

const rootReducer = combineReducers({
  brand: brandSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export default store;
