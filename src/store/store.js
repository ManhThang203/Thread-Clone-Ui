import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlide } from "@/features/auth";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage.default,
};

const rootReducer = combineReducers({
  [authSlide.reducerPath]: authSlide.reducer,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

const persistor = persistStore(store);

export { store, persistor };

window.store = store;
