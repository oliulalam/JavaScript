// using for loop
var numbers =[45,55,65,76,33,22];
sum =0;
for (var i=0; i<numbers.length; i++)
{
    var element = numbers[i];
    sum =sum + element;
}
console.log("total of numbers: ",sum);

// using function 

function getArraySum (numbers){
    for (var i=0; i<numbers.length; i++)
    {
        var element = numbers[i];
        sum =sum + element;
    }  
    return sum;
}
var numbers =[34,66,77,55,33,88];
var result = getArraySum(numbers);
console.log("total of the numbers: ",result);