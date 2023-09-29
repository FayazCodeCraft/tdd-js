/**
 * Splits an array into batches of a specified size.
 * @param {Array} array - The array to be batched.
 * @param {number} batchSize - The size of each batch.
 * @returns An array of arrays containing the batches of elements.
 */

function batchItems(array, batchSize) {
    return [...array].reduce((batches, arrayElement, index) => {
    if (index % batchSize === 0) {
        batches.push([arrayElement]);
    } else {
        const lastBatch = batches[batches.length - 1]
        lastBatch.push(arrayElement);
    }
    return batches;
    }, []);
}

/**
 * Creates a promise that resolves to the JSON data for the given item.
 * @param {number} item - The ID of the Star Wars API person.
 * @returns A promise that resolves to the JSON data for the given Star Wars API person.
 */

export function createPromise(item) {
    return fetch(`https://swapi.dev/api/people/${item}`).then((response)=>response.json())
}


/**
 * Creates an array of Promises by mapping a batch of items to the provided createPromise function.
 * @param {Array} batch - The batch of items to create Promises for.
 * @param {Function} createPromise - A function that creates a promise for a given item.
 * @returns promise that resolve to the values of the given createPromise function for each item in the given batch.
 */

function promisesForBatch(batch, createPromise) {
    const promises = batch.map(item => createPromise(item));
    return Promise.all(promises);
}

/**
 * Pipes Promises for batches of items, resolving them sequentially and concatenating the results.
 * @param {Array} items - The array of items to process in batches.
 * @param {number} batchSize - The size of each batch.
 * @param {Function} createPromise - A function that creates Promises for individual items.
 * @returns  A Promise that resolves to an array of values from all batches.
 */

export function pipePromisesForBatches(items, batchSize, createPromise) {
    const batches = batchItems([...items], batchSize);
    return batches.reduce((piped, currentBatch) => {
    return piped.then((pipedValues) => {
        const promiseForCurrentBatch = promisesForBatch(currentBatch, createPromise);
        return promiseForCurrentBatch.then((values) => [...pipedValues, ...values]);
    });
    }, Promise.resolve([]));
}

