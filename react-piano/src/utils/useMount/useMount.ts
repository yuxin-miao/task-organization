import { EffectCallback, useEffect } from "react";
// allows to run code right after a component is mounted into the DOM
const useEffectOnce = (effect: EffectCallback) => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(effect, []);
};
type Effect = (...args: unknown[]) => void;
export const useMount = (fn: Effect) => {
	useEffectOnce(() => {
		fn();
	});
};
