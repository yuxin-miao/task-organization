import { AnyAction, createAction } from "@reduxjs/toolkit";
import { Stroke } from "../utils/type";

export type SharedAction = AnyAction | ReturnType<typeof endStroke>;
export const endStroke = createAction<{
  stroke: Stroke;
  historyIndex: number;
}>("endStroke");
