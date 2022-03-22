import { getCounterValue } from './get-counter-value';

describe('Селектор: getCounterValue', () => {
	it('should', () => {
		expect(getCounterValue({})).toBe(0);
	});

	it('should-1', () => {
		expect(getCounterValue({
			counter: {
				value: 100
			}
		})).toBe(100);
	});
});
