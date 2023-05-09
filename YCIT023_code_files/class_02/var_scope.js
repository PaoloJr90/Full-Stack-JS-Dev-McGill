var x = 10;
// Here x is 10

{
    var x = 2;
    // Here x is 2
    console.log(x);
    {
        let x = 4;
        // Here x is 4
    }
    console.log(x);
}
// What is x here?

console.log(x);