/**
 * Returns the current time and date as a `Date` object
 *
 * @returns {Date} The date now
 */
function now(): Date {
    return new Date(Date.now());
}

/**
 * Mash day, month and year into one comparable `string`
 *
 * @param {Date} date Date to mash
 * @return {string} Mashed date as a string
 */
function getComparableDate(date: Date): string {
    return (
        /* Javascript is very bad at formatting dates
         * And so, this is the cleanest solution possible
         */
        date.getDate().toString() +
        date.getMonth().toString() +
        date.getFullYear().toString()
    );
}

export { now, getComparableDate };
