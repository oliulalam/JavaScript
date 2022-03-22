function animalCalculator(depth)
{
    var animal =0;

    if(depth<=10)
    {
        animal = depth*50;   
    }
    else if(depth<=20)
    {
          var first10 = 10*50;
          var remaning = depth - 10;
          var second20 = remaning*100;
          animal =first10 + second20; 
    }
    else
    {
        var first10 =10*50;
        var second20 = 10*100
          var remaning = depth - 20;
          var thard = remaning*300;
          animal =first10 + second+thard; 
    }
    return animal;
}

var result = animalCalculator(5);
console.log(result);
