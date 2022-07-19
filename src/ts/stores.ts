import { writable, type Writable } from "svelte/store";
import type { Coffee } from "./cup";

import type { Day } from "./day";

export const day: Writable<Day> = writable<Day>(
    /* eslint-disable */

    // Read local storage and turn the value in local storage (json) to an interface
    JSON.parse(localStorage.getItem("day") as string)
);

// Update local storage any time 'day' changes
day.subscribe(
    value =>
        // Turn data back into json for storing and assign in to the local storage value
        (localStorage.day = JSON.stringify(value))
);

export const coffeeType: Writable<Coffee> = writable();
export const popup: Writable<boolean> = writable();
