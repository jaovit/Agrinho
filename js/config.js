// tema
var modo = true;
var root = document.documentElement;
var elementosMudar = document.querySelectorAll('.tema');
var titulo =  document.querySelectorAll(".titulo")
var subtitulo =  document.querySelectorAll(".subtitulo")
var texto = document.querySelectorAll(".texto")
var txt_125 = document.querySelectorAll(".item_lista")
var txt_120 = document.querySelector(".titulo_120")

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
        elementosMudar[i].classList.add('claro');
    }
}

function mudarRoot() {
    if (modo) {
        var mudancas = {
            // claro
            // '--cor-header': '#c7c7c7',
            '--cor-principal': '#c7c7c7',
            '--cor-segundaria': '#b6b6b6',
            '--cor-titulo': '#202020',
            '--sub-titulo': '#242424',
            '--cor-texto': '#2e2e2e',
            '--borda': 'solid .01vw rgb(70, 70, 70)',
            '--background-card': 'url(../img/oatmeal-01_4e7de307.jpg)',
            '--filtro': 'brightness(50%)',
            // '--font-size-js': '1.5'
        }

        for (var i = 0; i < elementosMudar.length; i++) {
            elementosMudar[i].classList.add('claro');
        }

        modo = false
    } else {
        // escuro
        var mudancas = {

            // '--cor-header': 'rgba(25, 25, 25, 0.75)',
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

// tamanho da fonte
var barraFont = document.querySelector("#progress_font_size")

barraFont.addEventListener("input", fonte);

function fonte(){
    document.querySelector(".fonte_tamanho").innerHTML = barraFont.value / 100
    root.style.setProperty('--font-size-js', barraFont.value / 100);

    if (barraFont.value > 125){
        for (var i = 0; i < txt_125.length; i++) {
            txt_125[i].classList.add('txt_125');
        }
    } else{
        for (var i = 0; i < txt_125.length; i++) {
            txt_125[i].classList.remove('txt_125');
        }
    }

    if (barraFont.value > 120){
            txt_120.classList.add('txt_120');
    } else{
            txt_120.classList.remove('txt_120');
    }
}

// tamanho img
var barraImg = document.querySelector("#progress_img")

barraImg.addEventListener("input", img);

function img(){
    document.querySelector(".img_tamanho").innerHTML = barraImg.value / 100
    root.style.setProperty('--tamanho-img', barraImg.value / 100);
}

// geral
var barraGeral = document.querySelector("#progress_geral")

barraGeral.addEventListener("input", geral);

function geral(){
    document.querySelector(".geral_tamanho").innerHTML = barraGeral.value / 100

    document.querySelector(".fonte_tamanho").innerHTML = barraGeral.value / 100
    root.style.setProperty('--font-size-js', barraGeral.value / 100);
    barraFont.value = barraGeral.value; 

    document.querySelector(".img_tamanho").innerHTML = barraGeral.value / 100
    root.style.setProperty('--tamanho-img', barraGeral.value / 100);
    barraImg.value = barraGeral.value 

    if (barraFont.value > 125){
        for (var i = 0; i < txt_125.length; i++) {
            txt_125[i].classList.add('txt_125');
        }
    } else{
        for (var i = 0; i < txt_125.length; i++) {
            txt_125[i].classList.remove('txt_125');
        }
    }

    if (barraFont.value > 120){
            txt_120.classList.add('txt_120');
    } else{
            txt_120.classList.remove('txt_120');
    }

}

// resetar

function resetConf(){
    barraFont.value = 100;
    barraImg.value = 100;
    barraGeral.value = 100;

    if (barraFont.value > 125){
        for (var i = 0; i < txt_125.length; i++) {
            txt_125[i].classList.add('txt_125');
        }
    } else{
        for (var i = 0; i < txt_125.length; i++) {
            txt_125[i].classList.remove('txt_125');
        }
    }

    if (barraFont.value > 120){
            txt_120.classList.add('txt_120');
    } else{
            txt_120.classList.remove('txt_120');
    }

    geral()
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        modo = false;
        // true = escuro;
        for (var i = 0; i < elementosMudar.length; i++) {
            elementosMudar[i].classList.remove('claro');
        }
    
    } else {
        modo = true
        // false = claro;
        for (var i = 0; i < elementosMudar.length; i++) {
            elementosMudaosMudar[i].classList.add('claro');
        }
    }

    mudarRoot()
}