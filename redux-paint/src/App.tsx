import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { clearCanvas, setCanvasSize } from "./utils/canvasUtils";
import { beginStroke, updateStroke, endStroke } from "./actions";
import React, { useRef, useEffect } from "react";
import { RootState } from "./utils/type";
const WIDTH = 1024;
const HEIGHT = 768;
function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getCanvasWithContext = (canvas = canvasRef.current) => {
    return { canvas, context: canvas?.getContext("2d") };
  };
  const isDrawing = useSelector<RootState>(
    (state) => !!state.currentStroke.points.length
  );

  const dispatch = useDispatch();
  const startDrawing = ({
    nativeEvent,
  }: React.MouseEvent<HTMLCanvasElement>) => {
    const { offsetX, offsetY } = nativeEvent;
    dispatch(beginStroke(offsetX, offsetY));
  };
  const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    dispatch(updateStroke(offsetX, offsetY));
  };
  const endDrawing = () => {
    if (isDrawing) dispatch(endStroke());
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
        <div className="title-bar-text">Reduc Paint</div>
        <div className="title-bar-controls">
          <button aria-label="Close"></button>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseOut={endDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
      />
    </div>
  );
}

export default App;
