let objPar = document.getElementById('tekst');

function add()
{
    objPar.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dolorum!';
}

function del()
{
    objPar.textContent = '';
}

document.getElementById('dodaj').onclick = add;
document.getElementById('usun').onclick = del;
