let intPar1 = 10;
let intPar2 = 20;


function comperator (intA, intB)
{
    if  (intA == 20 || intB == 20 || intA+intB <= 20)
    {
        return true;
    }

    else 
    {
        return false;
    }
}

console.log(comperator(intPar1,intPar2));