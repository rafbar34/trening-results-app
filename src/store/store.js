import infoReducer from '../features/RegisterInformations/RegisterInformations';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    informations: infoReducer,
  },
});
