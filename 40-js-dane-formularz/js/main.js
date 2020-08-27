/* let objButton = document.querySelector('button'); */

function clickfun()
{  
    var name = document.getElementById('imie').value;
    document.getElementById('name').textContent = name;
    document.getElementById("name").style.padding = "5px";

    var name = document.getElementById('nazwisko').value;
    document.getElementById('surname').textContent = name;
    document.getElementById('surname').style.padding = "5px";

    var name = document.getElementById('tel').value;
    document.getElementById('phone').textContent = name;
    document.getElementById('phone').style.padding = "5px";
}

document.querySelector('button').onclick = clickfun;