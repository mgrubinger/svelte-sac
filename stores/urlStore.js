import { writable } from 'svelte/store';

/**
 * Creates a writable store that syncs to the URLSearchParams.
 *
 * Note:
 *  - does not support history.back currently.
 *  - uses history.replaceState
 *
 * @example
 * ```js
 * let myUrlStore = urlStore("count", "42");
 * ```
 *
 * @param {string} key The key of the URLSearchParam
 * @param {string|number} value The initial value of
 * @returns {Store} a writable Svelte store
 */
export function urlStore(key, value) {
	const store = writable(value);
	return {
		...store,
		set: (value) => {
      if (typeof window !== "undefined") {
        const usp = new URLSearchParams(window.location.search);
				usp.set(key, value);
				const g = `?${urlSearchParams.toString()}`;
        window.history.replaceState({}, null, g);
			}
      store.set(value);
		}
	};
}