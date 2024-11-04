import { useDispatch } from "react-redux";
import { setStrokeColor } from "../modules/currentStroke/actions";

const COLORS = [
  "#000000",
  "#808080",
  "#c0c0c0",
  "#ffffff",
  "#ff0000",
  "#800000",
  "#de3163",
  "#ff7f50",
  "#ffbf00",
  "#dfff00",
  "#ffff00",
  "#808000",
  "#88ff00",
  "#00ff00",
  "#9fe2bf",
  "#3498db",
  "#008000",
  "#00ffff",
  "#008080",
  "#5dade2",
  "#0000ff",
  "#6495ed",
  "#ccccff",
  "#d7bde2",
  "#ff00ff",
  "#9b59b6",
  "#800080",
  "#4a235a",
];

export const ColorPanel = () => {
  const dispatch = useDispatch();
  const onColorChange = (color: string) => {
    dispatch(setStrokeColor(color));
  };
  return (
    <div className="window colors-panel">
      <div className="title-bar">
        <div className="title-bar-text">Colors</div>
      </div>
      <div className="window-body colors">
        {COLORS.map((color: string) => (
          <div
            key={color}
            onClick={() => onColorChange(color)}
            className="color"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
};
