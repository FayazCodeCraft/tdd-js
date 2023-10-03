import { pipePromisesForBatches,createPromise } from "./batchPromises.js"
test(
    "Test: Fetching Star Wars API Data in Batches",
    () => 
         new Promise((resolve) => {
            let ids = [];
            for (let i = 1; i <=20; i++) {
                ids.push(i);
            }

            pipePromisesForBatches(ids, 5, createPromise)
                .then((result) => {
                    console.log(result)
                    expect(result).toBeInstanceOf(Array);
                    expect(result.length).toBe(20);
                    resolve();
                })
                .catch((error) => {
                    console.log(error)
                    expect(error).toBeDefined();
                    resolve()
                });
        }),
    100000,
);




