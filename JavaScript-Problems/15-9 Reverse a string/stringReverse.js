function reverseString (str){
    var reverse = [];
    for ( var i=0; i<str.length; i++)
    {
        var char =str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var statement= "hello aline vai";
var forAline = reverseString(statement);
console.log(forAline);