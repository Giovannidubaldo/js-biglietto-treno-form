let button = document.querySelector('.btn');

// punto 3
let prezzo;

// punto 7
button.addEventListener('click', function(){
    let km = document.getElementById('km').value;
    let age = document.getElementById('age').value;

    if(age == 'min'){
        prezzo = ((0.21 * km) * 0.8).toFixed(2);
        console.log(prezzo);
    }
    else if(age == 'over'){
        prezzo = ((0.21 * km) * 0.6).toFixed(2);
        console.log(prezzo);
    }
    else{
        prezzo = (0.21 * km).toFixed(2);
        console.log(prezzo);
    }
})