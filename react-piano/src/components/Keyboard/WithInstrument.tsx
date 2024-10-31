import { useAudioContext } from "../useAudioContext";
import { useSoundfont } from "../../adapters/Soundfont";
import { Keyboard } from "./Keyboard";
import { useEffect } from "react";
import { useInstrument } from "../../state/Instrument";
export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();
  const { loading, current, play, stop, load } = useSoundfont({ AudioContext });
  useEffect(() => {
    if (!loading && instrument !== current) load(instrument);
  }, [load, loading, current, instrument]);
  return <Keyboard loading={loading} play={play} stop={stop} />;
};
