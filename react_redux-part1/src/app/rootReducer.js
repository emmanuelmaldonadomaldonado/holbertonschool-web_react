// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import notificationsSlice from './notificationsSlice';
import coursesSlice from './coursesSlice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  notifications: notificationsSlice.reducer,
  courses: coursesSlice.reducer,
});

export default rootReducer;

