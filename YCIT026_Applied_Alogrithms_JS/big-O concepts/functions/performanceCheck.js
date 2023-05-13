const performanceCheck = (referFunction) => {
    return function () {
        const t1 = performance.now()
        const result = referFunction.apply(this, arguments);
        const t2 = performance.now()
        console.log(`Time Elapsed for ${referFunction.name}: ${(t2 - t1) / 1000} seconds.`);
        return result;
    }
}

export default performanceCheck;
