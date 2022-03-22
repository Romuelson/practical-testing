import counterReducer, { decrement, increment } from './counter';

describe('Reducer: Counter', () => {
	it('increment', () => {
		expect(counterReducer({value: 0}, increment())).toEqual({value: 1});
	});

	it('decrement', () => {
		expect(counterReducer({value: 0}, decrement())).toEqual({value: -1});
	});

	it('with empty state', () => {
		expect(counterReducer(undefined, increment())).toEqual({value: 1});
		expect(counterReducer(undefined, decrement())).toEqual({value: -1});
	});
});
