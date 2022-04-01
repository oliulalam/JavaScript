function explain_callback(name, age, task)
{
    task();
    console.log("hello", name);
    console.log("your age", age);
    

    
}

function washHand(){
    console.log("wash your hand with soap")
}

function takeShower(){
    console.log('take a shower')
}

function scrollFacebook(){
    console.log("scroll your facebook");
}

explain_callback( "johir Uddin",17,washHand);
explain_callback( "chogir Uddin",30, takeShower);
explain_callback( "fuckir Uddin",12,scrollFacebook);
