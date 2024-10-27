import { NoAudioMessage } from "../NoAudioMessgae";
import { useAudioContext } from "../useAudioContext";
import { KeyboardWithInstrument } from "../Keyboard";
export const Main = () => {
	const AudioContext = useAudioContext();
	return !!AudioContext ? <KeyboardWithInstrument /> : <NoAudioMessage />;
};
