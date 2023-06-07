
function func1() {
    return new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve("Func1")
    }, 1000)
}
)}

function func2() {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            resolve("Func2")
        }, 2000)
    })
}

func1()
    .then(func2())
    .then(function(result){
        console.log(result);
    })