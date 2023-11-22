// punto 3
let prezzo;

// punto 7
let button = document.querySelector('.btn');

button.addEventListener('click', function(){
    let km = document.getElementById('km').value;
    let age = document.getElementById('age').value;
    let utente = document.getElementById('utente').value;
    
    // punto 4 che contiene punto 5, 6, 8 e 9
    if(age == 'min'){
        prezzo = ((0.21 * km) * 0.8).toFixed(2);
    }
    else if(age == 'over'){
        prezzo = ((0.21 * km) * 0.6).toFixed(2);
    }
    else{
        prezzo = (0.21 * km).toFixed(2); 
    }

    console.log(prezzo);
    
    document.getElementById('prezzo_finale').innerText = prezzo + '€';
    document.getElementById('name').innerText = utente;
})