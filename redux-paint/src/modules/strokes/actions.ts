import { Stroke } from "../../utils/type";

export const END_STROKE = "END_STROKE";

export type Action = {
  type: typeof END_STROKE;
  payload: { stroke: Stroke; historyIndex: number };
};
export const endStroke = (historyIndex: number, stroke: Stroke) => {
  return { type: END_STROKE, payload: { historyIndex, stroke } };
};
