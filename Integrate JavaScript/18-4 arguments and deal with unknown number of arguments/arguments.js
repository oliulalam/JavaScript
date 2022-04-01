function addNumbers(num1, num2){
    var sum =0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        var sum =sum+num;
       
    }
    return sum;
}

var result = addNumbers(8,9,5,7,9)
console.log(result);