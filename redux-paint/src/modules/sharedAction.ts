import { createAction } from "@reduxjs/toolkit";
import { Stroke } from "../utils/type";

export const endStroke = createAction<{
  stroke: Stroke;
  historyIndex: number;
}>("endStroke");
