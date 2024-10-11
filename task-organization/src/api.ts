import { AppState } from "./state/appStateReducer";
// “This function will accept the current state and send it to the backend as JSON.”
export const save = (payload: AppState) => {
	return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/save`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-type": "application/json",
		},
		body: JSON.stringify(payload),
	}).then((response) => {
		if (response.ok) return response.json();
		else throw new Error("Error while saving the state");
	});
};

// “load the previously saved data from the backend. We cast the JSON parsing result to the AppState type.”
export const load = () => {
	return fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/load`).then(
		(response) => {
			if (response.ok) return response.json() as Promise<AppState>;
			else throw new Error("Error while loading the state");
		}
	);
};
