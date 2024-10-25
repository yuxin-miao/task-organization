import { NoAudioMessage } from "../NoAudioMessgae";
import { useAudioContext } from "../useAudioContext";
import { Keyboard } from "../Keyboard";
export const Main = () => {
	const AudioContext = useAudioContext();
	return !!AudioContext ? <Keyboard /> : <NoAudioMessage />;
};
