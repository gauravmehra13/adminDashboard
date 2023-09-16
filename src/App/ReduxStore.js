import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './Slicer';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
