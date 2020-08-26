let strA = 'Uwielbiam JavaScript';
let strB = 'Jestem świetnym programistą';

function comperator(str1, str2)
{
    if (str1.length > str2.length)
    {
        return str1;
    }

    else
    {
        return str2;
    }
}

console.log(comperator(strA,strB));
