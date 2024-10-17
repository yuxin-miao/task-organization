import { NoAudioMessage } from "../NoAudioMessgae";
import { useAudioContext } from "../useAudioContext";
export const Main = () => {
	const Keyboard = () => <>Keyboard</>;

	const AudioContext = useAudioContext();
	return !!AudioContext ? <Keyboard /> : <NoAudioMessage />;
};
