import { createContext, useContext } from "react";
import { InstrumentName } from "soundfont-player";
import { DEFAULT_INTRUMENT } from "../../domain/sound";
export type ContextValue = {
	instrument: InstrumentName;
	setInstrument: (instrument: InstrumentName) => void;
};

export const InstrumentContext = createContext<ContextValue>({
	instrument: DEFAULT_INTRUMENT,
	setInstrument() {},
});

export const InstrumentContextConsumer = InstrumentContext.Consumer;
export const useInstrument = () => useContext(InstrumentContext);
