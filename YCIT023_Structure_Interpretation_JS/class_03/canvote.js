function is_even(value)
{
    return (value % 2) == 0;
}

let num = 7;

if(is_even(num))
{
    console.log("The number is even");
}
else
{
    console.log("The number is odd");
}

// console.log(is_even(3));