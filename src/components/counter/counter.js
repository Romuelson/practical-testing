import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment } from '../../store/slices/counter/counter';
import { getCounterValue } from '../../store/slices/counter/selectors/get-counter-value/get-counter-value';

const Counter = () => {
	const dispatch = useDispatch();
	const value = useSelector(getCounterValue);

	const onIncrement = () => {
		dispatch(increment());
	};

	const onDecrement = () => {
		dispatch(decrement());
	};

	return (
		<div>
			<h1 data-testid='valueTitle'>{ value }</h1>
			<button onClick={onIncrement} data-testid='incrementBtn'>increment</button>
			<button onClick={onDecrement} data-testid='decrementBtn'>decrement</button>
		</div>
	);
};

export default Counter;
