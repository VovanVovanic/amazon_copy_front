import { cartSlice } from "./cart/cart.reducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import { userSlice } from "./user/user.reducer";
import storage from "redux-persist/lib/storage";
import { carouselSlice } from "./carousel/reducer";
import { filtersSlice } from "./filters/filters.reducer";

const persistConfig = {
  key: "amazon_copy",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userSlice.reducer,
  cart: cartSlice.reducer,
  carousel: carouselSlice.reducer,
  filters: filtersSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootStateType = ReturnType<typeof rootReducer>;
