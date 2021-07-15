import { createStore } from 'redux';

export const ACTIONS = {
	INC: 'increment',
	DEC: 'decrement',
	TOG: 'toggle',
	INCBA: 'increaseByAmount',
};

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
	if (action.type === ACTIONS.INC) {
		return {
			counter: state.counter + 1,
			showCounter: state.showCounter,
		};
	} else if (action.type === ACTIONS.DEC) {
		return {
			counter: state.counter - 1,
			showCounter: state.showCounter,
		};
	} else if (action.type === ACTIONS.INCBA) {
		return {
			counter: state.counter + 10,
			showCounter: state.showCounter,
		};
	} else if (action.type === ACTIONS.TOG) {
		return {
			counter: state.counter,
			showCounter: !state.showCounter,
		};
	}
	return state;
};

export const store = createStore(counterReducer);
