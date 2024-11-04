import { Stroke } from "../../utils/type";

export const UNDO = "UNDO";
export const REDO = "REDO";

export const END_STROKE = "END_STROKE";
export type historyIndexAction =
  | {
      type: typeof END_STROKE;
      payload: { stroke: Stroke; historyIndex: number };
    }
  | { type: typeof UNDO; payload: number }
  | { type: typeof REDO };
export const undo = (undoLimit: number) => {
  return { type: UNDO, payload: undoLimit };
};
export const redo = () => {
  return { type: REDO };
};
