function mostrarInfo(event, city) {
    let lista = 'lista'
    if (city == 'arapongas')
        lista = document.getElementById('lista');
    else if (city == 'assis')
        lista = document.getElementById('lista1');
    else if (city == 'astorga')
        lista = document.getElementById('lista2');
    else if (city == 'barracao')
        lista = document.getElementById('lista3');
    else if (city == 'campoL')
        lista = document.getElementById('lista4');
    else if (city == 'capanema')
        lista = document.getElementById('lista5');
    else if (city == 'cascavel')
        lista = document.getElementById('lista6');
    else if (city == 'colombo')
        lista = document.getElementById('lista7');
    else if (city == 'coronel')
        lista = document.getElementById('lista8');
    else if (city == 'curitiba')
        lista = document.getElementById('lista9');
    else if (city == 'foz')
        lista = document.getElementById('lista10');
    else if (city == 'goioere')
        lista = document.getElementById('lista11');
    else if (city == 'irati')
        lista = document.getElementById('lista12');
    else if (city == 'ivaipora')
        lista = document.getElementById('lista13');
    else if (city == 'jacarezinho')
        lista = document.getElementById('lista14');
    else if (city == 'jaguariaiva')
        lista = document.getElementById('lista15');
    else if (city == 'londrina')
        lista = document.getElementById('lista16');
    else if (city == 'palmas')
        lista = document.getElementById('lista17');
    else if (city == 'paranagua')
        lista = document.getElementById('lista18');
    else if (city == 'paranavai')
        lista = document.getElementById('lista19');
    else if (city == 'pinhais')
        lista = document.getElementById('lista20');
    else if (city == 'pitanga')
        lista = document.getElementById('lista21');
    else if (city == 'ponta')
        lista = document.getElementById('lista22');
    else if (city == 'quedas')
        lista = document.getElementById('lista23');
    else if (city == 'telemaco')
        lista = document.getElementById('lista24');
    else if (city == 'umuarama')
        lista = document.getElementById('lista25');
    else if (city == 'uniao')
        lista = document.getElementById('lista26');
    if (lista) {
        lista.style.display = 'block';
        lista.style.top = (event.pageY + 10) + 'px';
        lista.style.left = (event.pageX + 10) + 'px';
    }

    setTimeout(function() {
        lista.style.display = 'none';
    }, 5000);
}

function esconderInfo(city) {
    let lista = 'lista'
    if (city == 'arapongas')
        lista = document.getElementById('lista');
    else if (city == 'assis')
        lista = document.getElementById('lista1');
    else if (city == 'astorga')
        lista = document.getElementById('lista2');
    else if (city == 'barracao')
        lista = document.getElementById('lista3');
    else if (city == 'campoL')
        lista = document.getElementById('lista4');
    else if (city == 'capanema')
        lista = document.getElementById('lista5');
    else if (city == 'cascavel')
        lista = document.getElementById('lista6');
    else if (city == 'colombo')
        lista = document.getElementById('lista7');
    else if (city == 'coronel')
        lista = document.getElementById('lista8');
   // else if (city == 'curitiba')
        //lista = document.getElementById('lista9');
    else if (city == 'foz')
        lista = document.getElementById('lista10');
    else if (city == 'goioere')
        lista = document.getElementById('lista11');
    else if (city == 'irati')
        lista = document.getElementById('lista12');
    else if (city == 'ivaipora')
        lista = document.getElementById('lista13');
    else if (city == 'jacarezinho')
        lista = document.getElementById('lista14');
    else if (city == 'jaguariaiva')
        lista = document.getElementById('lista15');
    else if (city == 'londrina')
        lista = document.getElementById('lista16');
    else if (city == 'palmas')
        lista = document.getElementById('lista17');
    else if (city == 'paranagua')
        lista = document.getElementById('lista18');
    else if (city == 'paranavai')
        lista = document.getElementById('lista19');
    else if (city == 'pinhais')
        lista = document.getElementById('lista20');
    else if (city == 'pitanga')
        lista = document.getElementById('lista21');
    else if (city == 'ponta')
        lista = document.getElementById('lista22');
    else if (city == 'quedas')
        lista = document.getElementById('lista23');
    else if (city == 'telemaco')
        lista = document.getElementById('lista24');
    else if (city == 'umuarama')
        lista = document.getElementById('lista25');
    else if (city == 'uniao')
        lista = document.getElementById('lista26');
    
    if (lista) {
        lista.style.display = 'none';
    }
}

