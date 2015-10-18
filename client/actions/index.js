// Define an action type, it's used for reducer switching
export const GET_STARTED = 'GET_STARTED';

// Define the corresponding action creator, must return an object
export function getStarted() {
	return {
		type: GET_STARTED
	};
}