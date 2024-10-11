import { useState, useEffect } from "react";
import { AppState } from "./state/appStateReducer";
import { load } from "./api";

// HOC, accept AppStateProvider and inject the initialState prop, containing loaded data into it

type InjectedProps = { initialState: AppState };
type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>; //generic type that accepts the TBaseProps type variables

export function withInitialState<TProps>(
	WrappedComponent: React.ComponentType<
		PropsWithoutInjected<TProps> & InjectedProps
	>
) {
	return (props: PropsWithoutInjected<TProps>) => {
		const [initialState, setInitialState] = useState<AppState>({
			lists: [],
			draggedItem: null,
		});
		const [isLoading, setIsLoading] = useState(true);
		const [error, setError] = useState<Error | undefined>();
		useEffect(() => {
			const fetchInitialState = async () => {
				try {
					const data = await load();
					setInitialState(data);
				} catch (e) {
					if (e instanceof Error) setError(e);
				}
				setIsLoading(false);
			};
			fetchInitialState();
		}, []);
		if (isLoading) {
			return <div>Loading</div>;
		}
		if (error) {
			return <div>{error.message}</div>;
		}
		return <WrappedComponent {...props} initialState={initialState} />;
	};
}
