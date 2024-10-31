import { NoAudioMessage } from "../NoAudioMessgae";
import { useAudioContext } from "../useAudioContext";
import { Playground } from "../Playground/Playground";
export const Main = () => {
  const AudioContext = useAudioContext();
  return !!AudioContext ? <Playground /> : <NoAudioMessage />;
};
