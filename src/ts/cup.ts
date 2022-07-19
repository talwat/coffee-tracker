const CoffeeList: Coffee[] = [
    "Latte",
    "Black",
    "Cortado",
    "Espresso",
    "Americano",
    "Instant",
    "Cappuccino",
];

type Coffee =
    | "Latte"
    | "Black"
    | "Cortado"
    | "Espresso"
    | "Americano"
    | "Instant"
    | "Cappuccino";

interface Cup {
    readonly dateAdded: Date;
    readonly coffeeType: Coffee;
    readonly decaf: boolean;
    readonly ice: boolean;
}

/**
 * Gets the formatted time a cup was created in the hh:mm format
 *
 * @param {Cup} cup Cup to get time from
 * @returns {string} Formatted time
 */
function getCupTime(cup: Cup): string {
    const date: Date = getCupDate(cup);
    return date.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
    });
}

/**
 * Gets a cups added date
 *
 * @param {Cup} cup The cup to get the date from
 * @return {Date} The cups date when it was added
 */
function getCupDate(cup: Cup): Date {
    return new Date(cup.dateAdded);
}

export { type Cup, type Coffee, CoffeeList, getCupDate, getCupTime };
