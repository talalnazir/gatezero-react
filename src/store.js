import { configureStore } from '@reduxjs/toolkit'
import initiativeSlice from './Reducer/reducer';

export default configureStore({
  reducer: {
    initiative: initiativeSlice,
  },
})