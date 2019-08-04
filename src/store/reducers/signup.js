import { REGISTERED, REGISTER_ERROR, REGISTERING } from "../actions/actions";
const initialState = {
	signed_up: false,
	signing_up: false,
	signup_error: false,
	message: null,
	user: null,
	logged_in: false
};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTERED:
			return {
				...state,
				signed_up: true,
				message: null,
				user: action.payload.user
			};
		case REGISTER_ERROR:
			return {
				...state,
				signup_error: true,
				message: action.payload.message
			};
		case REGISTERING:
			return {
				...state,
				signing_up: true,
				message: null
			};
		case "LOGIN":
			return {
				...state,
				logged_in: true,
				user: action.payload.user
			};
		default:
			return state;
	}
};

export default reducer;
