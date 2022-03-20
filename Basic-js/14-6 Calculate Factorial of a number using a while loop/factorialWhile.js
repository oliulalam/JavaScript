// var i = 1;
// var factorial = 1;
// while(i<=10)
// {
//     factorial = factorial*i;
//     console.log(i, factorial);
//     i++;
// }

function factorialNumber(n){
 var i = 1;
var factorial = 1;
while(i<=n)
{
    factorial = factorial*i;
    i++;
}
return factorial;
}

var result = factorialNumber(5);
console.log(result);
