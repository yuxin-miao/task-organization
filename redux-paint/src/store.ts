import {
  composeWithDevTools,
  devToolsEnhancer,
} from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { logger } from "redux-logger";
import { reducer as historyIndex } from "./modules/historyIndex/reducer";
import { reducer as currentStroke } from "./modules/currentStroke/reducer";
import { reducer as strokes } from "./modules/strokes/reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore(
  { reducer: { historyIndex, currentStroke, strokes } }
  // composeWithDevTools(applyMiddleware(logger))
);
