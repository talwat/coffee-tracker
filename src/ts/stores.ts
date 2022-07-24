import { writable, type Writable } from "svelte/store";
import type { Coffee } from "./cup";
import type { Day } from "./day";

export const day: Writable<Day> = writable<Day>(
    // Read local storage and turn the value in local storage (json) to an interface
    <Day>JSON.parse(<string>localStorage.getItem("day")) || {
        cups: [],
    }
);

// Update local storage any time 'day' changes
day.subscribe(
    value =>
        // Turn data back into json for storing and assign in to the local storage value
        (localStorage.day = JSON.stringify(value))
);

function persistentWritable<T extends boolean | string | number>(
    def: T,
    storeName: string
): Writable<T> {
    const store: Writable<T> = writable<T>(
        JSON.parse((localStorage[storeName] as string) || (def as string)) as T
    );
    store.subscribe(value => (localStorage[storeName] = JSON.stringify(value)));

    return store;
}

export const max: Writable<number> = persistentWritable(2, "max");
export const lightMode: Writable<boolean> = persistentWritable(
    true,
    "lightMode"
);
export const firstTime: Writable<boolean> = persistentWritable(
    true,
    "firstTime"
);

export const coffeeType: Writable<Coffee> = writable();
export const addMenu: Writable<boolean> = writable(false);
export const screenClear: Writable<boolean> = writable(true);
export const intro: Writable<boolean> = writable(false);
