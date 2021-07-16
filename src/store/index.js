import { createSlice, configureStore } from '@reduxjs/toolkit';
// import { createStore } from 'redux';

// export const ACTIONS = {
// 	INC: 'increment',
// 	DEC: 'decrement',
// 	TOG: 'toggle',
// 	INCBA: 'increaseByAmount',
// };

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: 'Counter',
	initialState,
	reducer: {
		increment(state) {
			state.counter++;
			// we shouldn't update existing state but redux manages this in the background
		},
		decrement(state) {
			state.counter--;
		},
		increaseByAmount(state, action) {
			state.counter += action.payload;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

// const counterReducer = (state = initialState, action) => {
// 	if (action.type === ACTIONS.INC) {
// 		return {
// 			counter: state.counter + 1,
// 			showCounter: state.showCounter,
// 		};
// 	} else if (action.type === ACTIONS.DEC) {
// 		return {
// 			counter: state.counter - 1,
// 			showCounter: state.showCounter,
// 		};
// 	} else if (action.type === ACTIONS.INCBA) {
// 		return {
// 			counter: state.counter + action.amount,
// 			showCounter: state.showCounter,
// 		};
// 	} else if (action.type === ACTIONS.TOG) {
// 		return {
// 			counter: state.counter,
// 			showCounter: !state.showCounter,
// 		};
// 	}
// 	return state;
// };

// export const store = createStore(counterReducer);

export const store = configureStore({ reducer: counterSlice.reducer });

export const counterActions = counterSlice.actions;
