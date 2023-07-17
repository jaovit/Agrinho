var modo = true;
// true = escuro;
// false = claro;

function mudarRoot() {
    var root = document.documentElement;
    if (modo) {
        var mudancas = {
            '--cor-principal': '#c7c7c7',
            '--cor-segundaria': '#b6b6b6',
            '--cor-titulo': '#202020',
            '--sub-titulo': '#242424',
            '--cor-texto': '#2e2e2e',
            '--cor-borda': 'solid .01vw rgb(70, 70, 70)',
            '--background-card': 'url(../img/oatmeal-01_4e7de307.jpg)',
            '--filtro': 'brightness(50%)'
        }

        document.querySelector('.template').style.cssText =
            'background-color: var(--cor-segundaria);' +
            'height: 40vw;'

        document.querySelector('.template_img').style.cssText =
            'display: block;'

        document.querySelector('.texto_1').style.cssText =
            ' top: 50%; ' +
            ' left: 18vw; ' +
            ' translate: 0 -50%; ' +
            ' width: 35vw; '

        modo = false
    } else {
        var mudancas = {
            '--cor-principal': '#302D2C',
            '--cor-segundaria': '#464342',
            '--cor-titulo': '#ebc4b0',
            '--sub-titulo': '#EBCCBB',
            '--cor-texto': '#c9c2c0',
            '--cor-borda': 'solid .01vw rgb(172, 170, 170)',
            '--background-card': 'url(../img/mocha-01_3eb3a5cd.jpg)',
            '--filtro': 'brightness(35%)'
        }
        document.querySelector('.template').style.cssText =
            'background-color: transparent;' +
            'height: 38vw;'

        document.querySelector('.template_img').style.cssText =
            'display: none;'

        document.querySelector('.texto_1').style.cssText =
            ' top: 11vw; ' +
            ' left: 50%;' +
            ' translate: -50% 0;' +
            ' width: 70vw;'

        // document.querySelector('.topicos').style.cssText =
        //     'height: 22vw;;'

        // document.querySelector('#topic_t').style.cssText =
        //     'top: 0;'

        // document.querySelector('.topicos_lista').style.cssText =
        //     'top: 3vw;'
        modo = true
    }

    for (var prop in mudancas) {
        root.style.setProperty(prop, mudancas[prop]);
    }
}