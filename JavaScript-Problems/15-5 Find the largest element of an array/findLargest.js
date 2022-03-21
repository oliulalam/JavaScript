var marks = [34, 55, 67, 33, 57, 99, 95, 80, 82];
var max = marks[0];
for (var i=0; i<marks.length; i++)
{
    var element =marks[i]
    if(element>max)
    {
     max=element;
    }
}
console.log("Highest value:", max);