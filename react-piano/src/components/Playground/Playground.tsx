import { InstrumentContextProvider } from "../../state/Instrument";
import { InstrumentSelector } from "../InstrumentSelector/InstrumentSelector";
import { KeyboardWithInstrument } from "../Keyboard";
export const Playground = () => {
  return (
    <InstrumentContextProvider>
      <div className="playground">
        <KeyboardWithInstrument />
        <InstrumentSelector />
      </div>
    </InstrumentContextProvider>
  );
};
