# svelte-sac
Collection of Svelte Stores, Actions and Components

## Actions

## Stores

### debouncedWritable

Creates a debounced writable store.

The store's value will update after `wait` milliseconds of the last
update/set.

This is useful when handling user input to update the value of an <input>
only after `wait` milliseconds.

```js
<script>
import { debouncedWritable } from 'svelte-sac';
let myDebouncedValue = debouncedWritable("a string", 100);
</script>

<input type="text" bind:value={$myDebouncedValue} /><!-- << this will update myDebouncedValue after 100ms -->

```

[Demo](https://stackblitz.com/edit/vitejs-vite-grihgc?file=src/App.svelte)

### urlStore

Creates a writable store that syncs to the URLSearchParams.

**Note:**
 - does not support history.back currently.
 - uses history.replaceState

```svelte
<script>
import { urlStore } from 'svelte-sac';
let myUrlStore = urlStore("count", 42);

// later:
$myUrlStore = 43;
// this will set the URL to
?count=42
</script>
```

## Components
