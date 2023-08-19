import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import createSagaMiddleware from "@redux-saga/core";

import { watchUserAll } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: usersSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchUserAll);

export default store;
