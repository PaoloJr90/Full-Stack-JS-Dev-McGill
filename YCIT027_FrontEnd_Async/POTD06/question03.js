

const evenOdd = (num) => {
    return new Promise((resolve, reject) => {
        if (typeof num !== "number") {
            reject("error");
        }
        else if (num % 2 !== 0) {
            return setTimeout(() => {
                resolve("odd");
            }
                , 1000);
        }
        else {
            if(num % 2 === 0) {
                return setTimeout(() => {
                    reject("even");
                }
                    , 2000);
            }
        }
    });
};

const test = function(number) {
    evenOdd(number)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
}

test(2);
test(1);
test(3);
test(0);
test("ab");