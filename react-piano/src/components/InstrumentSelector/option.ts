import { instrument, InstrumentName } from "soundfont-player";
import instruments from "soundfont-player/names/musyngkite.json";

type Option = {
  value: InstrumentName;
  label: string;
};

type OptionsList = Option[];

type InstrumentsList = InstrumentName[];
function normalizeList(list: InstrumentsList): OptionsList {
  return list.map((instrument) => ({
    value: instrument,
    label: instrument.replace(/_/gi, " "),
  }));
}
export const options = normalizeList(instruments as InstrumentsList);
