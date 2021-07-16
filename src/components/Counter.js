import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((store) => store.counter);
	const show = useSelector((store) => store.showCounter);

	const incrementHandler = () => {
		// dispatch({ type: ACTIONS.INC });
		dispatch(counterActions.increment());
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const increaseByAmountHandler = () => {
		// dispatch({ type: ACTIONS.INCBA, amount: 10 });
		dispatch(counterActions.increaseByAmount(10));
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<button onClick={incrementHandler}>Increment</button>
			<button onClick={increaseByAmountHandler}>Increase by 10</button>
			<button onClick={decrementHandler}>Decrement</button>
			<br />
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
