import { configureStore } from '@reduxjs/toolkit';
import maticFlow from '../feature/matic/slice'

export const store = configureStore({
  reducer: {
    maticFlow,
  },
});
