import {
  Action,
  UPDATE_STROKE,
  BEGIN_STROKE,
  END_STROKE,
  SET_STROKE_COLOR,
} from "./actions";

import { RootState, Stroke } from "./utils/type";
const initialState: RootState = {
  currentStroke: { points: [], color: "#000" },
  strokes: [],
};
export const currentStrokeSelector = (state: RootState): Stroke => {
  return state.currentStroke;
};
export const rootReducer = (
  state: RootState = initialState,
  action: Action
) => {
  switch (action.type) {
    case BEGIN_STROKE: {
      return {
        ...state,
        currentStroke: {
          ...state.currentStroke,
          points: [action.payload],
        },
      };
    }
    case UPDATE_STROKE: {
      return {
        ...state,
        currentStroke: {
          ...state.currentStroke,
          points: [...state.currentStroke.points, action.payload],
        },
      };
    }
    case END_STROKE: {
      if (!state.currentStroke.points.length) return state;
      return {
        ...state,
        currentStroke: { ...state.currentStroke, points: [] },
        strokes: [...state.strokes, state.currentStroke],
      };
    }
    case SET_STROKE_COLOR: {
      return {
        ...state,
        currentStroke: {
          ...state.currentStroke,
          ...{ color: action.payload },
        },
      };
    }
    default:
      return state;
  }
};
