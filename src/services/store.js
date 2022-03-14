import { writable } from "svelte/store";
export let storePanels = writable([]);
export let idIncrement = writable(1);
export let height = writable(4000);
export let width = writable(4000);
export let rightIntent = writable(0);
export let leftIntent = writable(0);
export let canvas = writable();
