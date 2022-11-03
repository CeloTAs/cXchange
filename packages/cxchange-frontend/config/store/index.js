import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import sagaMonitor from "@redux-saga/simple-saga-monitor";
import rootReducer from "../reducers";

export default function store() {
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

  if (process.env.NODE_ENV === "production") {
    return {
      ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
      runSaga: sagaMiddleware.run,
      devTools: false,
    };
  }
  return {
    ...createStore(rootReducer, applyMiddleware(sagaMiddleware, logger)),
    runSaga: sagaMiddleware.run,
    devTools: true,
  };
}
