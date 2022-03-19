var number = [33, 44, 55, 66 ,77, 87, 90];
for (var i=0; i<number.length; i++)
{
    var element = number[i];
    console.log(element);
}


console.log('outside');
console.log('inside');

function add(num1,num2)
{
    var total = num1 + num2;
    return total;
}

var result = add(34,66);
console.log(result);
console.log('this not in side');
console.log('tumi chole aso vitore');
var result2 = add(44, 678);
console.log(result2);
