import {
  composeWithDevTools,
  devToolsEnhancer,
} from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { logger } from "redux-logger";
import { currentStroke } from "./modules/currentStroke/slice";
import historyIndex from "./modules/historyIndex/slice";
import strokes from "./modules/strokes/slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore(
  { reducer: { historyIndex, currentStroke, strokes } }
  // composeWithDevTools(applyMiddleware(logger))
);
