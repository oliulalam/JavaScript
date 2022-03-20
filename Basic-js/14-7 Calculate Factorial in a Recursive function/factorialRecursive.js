// var factorial = 1;
// for (var i=10; i>=1; i--){
// var factorial = factorial*i;
// console.log(i,factorial);
// }

// var i = 10;
// var result =1;
// while(i>=1)
// {
//     var result =result*i;
//     i--;
//     console.log(i,result);
// }

//function diye factorial recursive

function factorial(n)
{
    if(n==0)
    {
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}

var result = factorial(10)
console.log(result);
