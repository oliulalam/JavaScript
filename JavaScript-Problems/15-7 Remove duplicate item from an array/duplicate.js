var names = [2, 3, 4, 5, 2, 3, 7, 9, 10, 56];
var uniqueName =[];
for (var i=0; i<names.length; i++)
{
 var element =names[i];
 var index =uniqueName.indexOf(element);
 if (index == -1)
 {
     uniqueName.push(element);
 }
}
console.log(uniqueName);