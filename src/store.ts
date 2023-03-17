import { configureStore } from '@reduxjs/toolkit'
import { UserState } from './usersReducer'
// ...
export const store = configureStore({
  reducer:{

  },
    
  
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch