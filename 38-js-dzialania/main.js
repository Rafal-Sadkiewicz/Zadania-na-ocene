var intA = 10;
var intB = 5;

function calc(int1, int2)
{
    if(int1+int2 < 0 || int1-int2 < 0 || int1*int2 < 0)
    {
        console.log('Wynik nieprawidłowy');
    }

    else 
    {
        console.log('Wynik dodawania wynosi: ' + (int1+int2));
        console.log('Wynik odejmowania wynosi: ' + (int1-int2));
        console.log('Wynik mnożenia wynosi: ' + int1*int2);
    }

}

calc(intA,intB);