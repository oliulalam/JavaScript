//ei vabeo ber kora jay sohoje 
console.log(2032/4);

//modulas koreo ber kora jay
const year =3566;
console.log(year % 4);

//function use koreo ber kora jay

function IsleapYear(year)
{
    const remainder = year % 4;
    if (remainder == 0)
    {
        return true;
    }
    else{

        return false;
    }
}

const check2000 = IsleapYear (2000);
console.log(check2000);