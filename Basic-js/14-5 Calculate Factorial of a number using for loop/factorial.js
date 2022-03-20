//using for loop factorial nam
// var factorial = 1;
// for ( var i= 1; i <=5; i++)
// {
//     factorial = factorial*i;
//     console.log(i,factorial);
// }

//using function factorial nam

function factorial(num)
{
    var factorial= 1;
    for ( var i=1; i<=num; i++){
        factorial = factorial*i;
    }
    return factorial;
}

var result = factorial(5);
console.log(result);