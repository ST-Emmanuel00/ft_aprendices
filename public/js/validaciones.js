function validacion_latitud() {

    try {

        const latitud = document.querySelector('#latitud');
        const FB_latitud = document.querySelector('#FB_latitud');

        const ER_latitud = /^S+[0-9]{3}$/

        if (ER_latitud.test(latitud.value) || latitud.value >= 6.14 && latitud.value <= 6.2) {

            latitud.style.borderColor = 'green'
            FB_latitud.innerHTML = '';
            FB_latitud.style.color = 'green'
        }

        else throw 'Lo siento, no es valido ' + latitud.value;

    } catch (error) {

        const latitud = document.querySelector('#latitud');
        const FB_latitud = document.querySelector('#FB_latitud');

        FB_latitud.innerHTML = error;
        latitud.style.borderColor = 'red'
        FB_latitud.style.color = 'red'

    }



}

function validacion_longitud() {

    try {

        const longitud = document.querySelector('#longitud');
        const FB_longitud = document.querySelector('#FB_longitud');

        const ER_longitud = /^S+[0-9]{4}$/

        if (ER_longitud.test(longitud.value) || longitud.value >= -75.5 && longitud.value <= -75.43) {

            longitud.style.borderColor = 'green'
            FB_longitud.innerHTML = '';
            FB_longitud.style.color = 'green'
        }

        else throw 'Lo siento, no es valido ' + longitud.value;

    } catch (error) {

        const longitud = document.querySelector('#longitud');
        const FB_longitud = document.querySelector('#FB_longitud');

        FB_longitud.innerHTML = error;
        longitud.style.borderColor = 'red'
        FB_longitud.style.color = 'red'

    }



}