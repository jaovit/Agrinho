var modo = true;

var elementosMudar = document.querySelectorAll('.tema');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    modo = true;
    // true = escuro;
    for (var i = 0; i < elementosMudar.length; i++) {
        elementosMudar[i].classList.remove('claro');
    }

} else {
    modo = false
    // false = claro;
    for (var i = 0; i < elementosMudar.length; i++) {
        elementosMudaosMudar[i].classList.add('claro');
    }
}

function mudarRoot() {
    var root = document.documentElement;
    if (modo) {
        var mudancas = {
            // claro
            '--cor-header': '#c7c7c7',
            '--cor-principal': '#c7c7c7',
            '--cor-segundaria': '#b6b6b6',
            '--cor-titulo': '#202020',
            '--sub-titulo': '#242424',
            '--cor-texto': '#2e2e2e',
            '--borda': 'solid .01vw rgb(70, 70, 70)',
            '--background-card': 'url(../img/oatmeal-01_4e7de307.jpg)',
            '--filtro': 'brightness(50%)'
        }

        for (var i = 0; i < elementosMudar.length; i++) {
            elementosMudar[i].classList.add('claro');
        }

        modo = false
    } else {
        // escuro
        var mudancas = {

            '--cor-header': 'rgba(25, 25, 25, 0.75)',
            '--cor-principal': '#302D2C',
            '--cor-segundaria': '#464342',
            '--cor-titulo': '#ebc4b0',
            '--sub-titulo': '#EBCCBB',
            '--cor-texto': '#c9c2c0',
            '--borda': 'solid .01vw rgb(172, 170, 170)',
            '--background-card': 'url(../img/mocha-01_3eb3a5cd.jpg)',
            '--filtro': 'brightness(35%)'
        }

        for (var i = 0; i < elementosMudar.length; i++) {
            elementosMudar[i].classList.remove('claro');
        }

        modo = true
    }

    for (var prop in mudancas) {
        root.style.setProperty(prop, mudancas[prop]);
    }
}