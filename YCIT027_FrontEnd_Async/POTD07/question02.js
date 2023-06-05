const originalPrice = 100;
const discountPercentage = 10;

const calculateDiscountPrice = (somePrice, somePercentage) => {
    return new Promise((resolve, reject) => {
        if (typeof somePrice !== "number" || typeof somePercentage !== "number") {
            reject("Input parameters must be numbers");
        } else {
            let discountPrice = somePrice - (somePrice * (somePercentage / 100));
            resolve(discountPrice);
        }
    });
};

const promise = calculateDiscountPrice(originalPrice, discountPercentage);
promise.then((result) => {
    console.log(result);
    return result;
})
.catch((error) => {
    console.log(error);
    return error;
});