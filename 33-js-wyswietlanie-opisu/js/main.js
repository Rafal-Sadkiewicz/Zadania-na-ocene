let objPar = document.getElementById('opis');
let objBat = document.querySelector('button');

function click()
{
    objPar.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, non.';
}

objBat.onclick = click;


