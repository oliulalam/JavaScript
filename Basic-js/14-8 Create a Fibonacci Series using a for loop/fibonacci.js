//using for loop fibonacci series
// var fibonacci = [0,1];

// for (var i = 2; i<=12; i++){
//     fibonacci[i]=fibonacci[i-1]+fibonacci[i-2];
// }
// console.log(fibonacci);


//using function fibonacci series
function fibonacci(n)
{
    var fibo =[0,1];
    for ( var i=2; i<=n; i++)
    {
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
     return fibo;
}
var result = fibonacci(12);
console.log(result);