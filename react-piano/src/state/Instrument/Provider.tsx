import { FunctionComponent, useState, ReactNode } from "react";
import { DEFAULT_INTRUMENT } from "../../domain/sound";
import { InstrumentContext } from "./Context";
type Props = { children: ReactNode };
export const InstrumentContextProvider: FunctionComponent<Props> = ({
	children,
}) => {
	const [instrument, setInstrument] = useState(DEFAULT_INTRUMENT);
	return (
		<InstrumentContext.Provider value={{ instrument, setInstrument }}>
			{children}
		</InstrumentContext.Provider>
	);
};
