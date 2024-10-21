import { configureStore } from '@reduxjs/toolkit';
import ListDataSlice from '../slice/listDataSlice';
const { createLogger } = require('redux-logger');

const logger = createLogger({
    collapsed: false,
  });
export const store = configureStore({
    reducer: {
        userDataList: ListDataSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;