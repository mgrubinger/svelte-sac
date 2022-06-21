import { writable } from 'svelte/store';

/**
 * Creates a debounced writable store.
 *
 * The store's value will update after `wait` milliseconds of the last
 * update/set.
 *
 * @example
 * ```js
 * let myDebouncedValue = debouncedWritable("a string", 100);
 * ```
 *
 * @param {any} [value=null] The initial value of the store
 * @param {number} [wait=0] The number of milliseconds to delay
 * @returns {Store}
 */
export function debouncedWritable(value = null, wait = 0) {
	let store = writable(value);
	let timeoutId;
	return {
		...store,
		set: (value) => {
			if (timeoutId) clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				store.set(value);
			}, wait);
		},
		update: (value) => {
			if (timeoutId) clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				store.update(value);
			}, wait);
		},
	};
}
