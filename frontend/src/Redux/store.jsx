import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./auth/authSlice";
import { dark } from "@mui/material/styles/createPalette";
import darkmodeSlice from "./darkmode/darkmodeSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authSlice);
const persistedReducerdark = persistReducer(persistConfig, darkmodeSlice);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    darkmode: persistedReducerdark,
  },
});

export default store;
