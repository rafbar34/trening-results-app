import { configureStore } from '@reduxjs/toolkit'
import infoReducer from '../features/RegisterInformations/informations'
export const store = configureStore({
  reducer: {
    informations:infoReducer,
  },
})
