import { Point, RootState, Stroke } from "../../utils/type";
import { endStroke } from "../sharedAction";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: RootState["currentStroke"] = {
  points: [],
  color: "#000",
};
export const currentStrokeSelector = (state: RootState): Stroke => {
  return state.currentStroke;
};
const slice = createSlice({
  name: "currentStroke",
  initialState,
  reducers: {
    beginStroke: (state, action: PayloadAction<Point>) => {
      state.points = [action.payload];
    },
    updateStroke: (state, action: PayloadAction<Point>) => {
      state.points.push(action.payload);
    },
    setStrokeColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(endStroke, (state) => {
      state.points = [];
    });
  },
});
export const currentStroke = slice.reducer;
export const { beginStroke, updateStroke, setStrokeColor } = slice.actions;
