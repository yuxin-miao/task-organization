import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { clearCanvas, setCanvasSize, drawStroke } from "./utils/canvasUtils";
import { beginStroke, updateStroke } from "./modules/currentStroke/slice";
import { endStroke } from "./modules/sharedAction";
import { ColorPanel } from "./shared/ColorPanel";
import React, { useEffect } from "react";
import { EditPanel } from "./shared/EditPanel";
import { historyIndexSelector } from "./modules/historyIndex/slice";
import { strokesSelector } from "./modules/strokes/slice";
import { currentStrokeSelector } from "./modules/currentStroke/slice";
import { useCanvas } from "./CanvasContext";
import { FilePanel } from "./shared/FilePanel";
const WIDTH = 1024;
const HEIGHT = 768;
function App() {
  const historyIndex = useSelector(historyIndexSelector);
  const strokes = useSelector(strokesSelector);
  const currentStroke = useSelector(currentStrokeSelector);
  const canvasRef = useCanvas();
  const getCanvasWithContext = (canvas = canvasRef.current) => {
    return { canvas, context: canvas?.getContext("2d") };
  };
  const isDrawing = !!currentStroke.points.length;

  useEffect(() => {
    const { context } = getCanvasWithContext();
    if (!context) return;
    requestAnimationFrame(() =>
      drawStroke(context, currentStroke.points, currentStroke.color)
    );
  }, [currentStroke]);
  useEffect(() => {
    const { canvas, context } = getCanvasWithContext();
    if (!context || !canvas) return;
    requestAnimationFrame(() => {
      clearCanvas(canvas);
      strokes.slice(0, strokes.length - historyIndex).forEach((stroke) => {
        drawStroke(context, stroke.points, stroke.color);
      });
    });
  }, [historyIndex]);

  const dispatch = useDispatch();
  const startDrawing = ({
    nativeEvent,
  }: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = nativeEvent;
    dispatch(beginStroke({ x: offsetX, y: offsetY }));
  };
  const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    dispatch(updateStroke({ x: offsetX, y: offsetY }));
  };
  const endDrawing = () => {
    if (isDrawing) dispatch(endStroke({ historyIndex, stroke: currentStroke }));
  };

  useEffect(() => {
    const { canvas, context } = getCanvasWithContext();
    if (!canvas || !context) return;
    setCanvasSize(canvas, WIDTH, HEIGHT);
    context.lineJoin = "round";
    context.lineCap = "round";
    context.lineWidth = 5;
    context.strokeStyle = "black";
    clearCanvas(canvas);
  }, []);

  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">Paint</div>
        <div className="title-bar-controls">
          <button aria-label="Close"></button>
        </div>
      </div>
      <EditPanel />
      <ColorPanel />
      <FilePanel />
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseOut={endDrawing}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
        onMouseMove={draw}
      />
    </div>
  );
}

export default App;
