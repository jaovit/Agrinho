var modo = true;

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    modo = true;
    document.querySelector('.template').classList.remove("claro");
    console.log("modo escuro")
    // true = escuro;

} else {
    modo = false
    document.querySelector('.template').classList.add("claro");
    console.log("modo claro")
    // false = claro;
}

function mudarRoot() {
    var root = document.documentElement;
    if (modo) {
        var mudancas = {
            // claro
            '--cor-principal': '#c7c7c7',
            '--cor-segundaria': '#b6b6b6',
            '--cor-titulo': '#202020',
            '--sub-titulo': '#242424',
            '--cor-texto': '#2e2e2e',
            '--borda': 'solid .01vw rgb(70, 70, 70)',
            '--background-card': 'url(../img/oatmeal-01_4e7de307.jpg)',
            '--filtro': 'brightness(50%)'
        }

        document.querySelector('.template').classList.add("claro");

        modo = false
    } else {
        // escuro
        var mudancas = {
            '--cor-principal': '#302D2C',
            '--cor-segundaria': '#464342',
            '--cor-titulo': '#ebc4b0',
            '--sub-titulo': '#EBCCBB',
            '--cor-texto': '#c9c2c0',
            '--borda': 'solid .01vw rgb(172, 170, 170)',
            '--background-card': 'url(../img/mocha-01_3eb3a5cd.jpg)',
            '--filtro': 'brightness(35%)'
        }

        document.querySelector('.template').classList.remove("claro");

        modo = true
    }

    for (var prop in mudancas) {
        root.style.setProperty(prop, mudancas[prop]);
    }
}