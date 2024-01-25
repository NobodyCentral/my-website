import { writable } from 'svelte/store';

export const theme = writable('dark');
export const showMenu = writable(false);