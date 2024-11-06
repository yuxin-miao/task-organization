import { beginStroke, setStrokeColor, updateStroke } from "./actions";

import { RootState, Stroke } from "../../utils/type";
import { endStroke } from "../sharedAction";
import { createReducer } from "@reduxjs/toolkit";
const initialState: RootState["currentStroke"] = {
  points: [],
  color: "#000",
};
export const currentStrokeSelector = (state: RootState): Stroke => {
  return state.currentStroke;
};
export const historyIndexSelector = (state: RootState) => state.historyIndex;
export const strokesSelector = (state: RootState) => state.strokes;
export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(beginStroke, (state, action) => {
    state.points = [action.payload];
  });
  builder.addCase(setStrokeColor, (state, action) => {
    state.color = action.payload;
  });
  builder.addCase(updateStroke, (state, action) => {
    state.points.push(action.payload);
  });
  builder.addCase(endStroke, (state, action) => {
    state.points = [];
  });
});
