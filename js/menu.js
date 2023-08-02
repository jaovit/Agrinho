var aberto = false

document.addEventListener('click', function (event) {
    var target = event.target;
    var checkbox = document.querySelector('#menu_input');
    var label = document.querySelector('.clic_js');
    var nav = document.querySelector('.configuracao');
    if (target === checkbox) {

    } else {


        if (target === label) {
            if (aberto) {
                aberto = false
                checkbox.checked = true;

            } else {
                aberto = true;
                checkbox.checked = false;
            }
        } else {

            if (target !== checkbox && target !== nav) {
                checkbox.checked = false;
                if (aberto) {
                    aberto = false
                    checkbox.checked = false;

                }
            }
        }
    }

});

var nav = document.querySelector('.configuracao')
nav.addEventListener('click', function (event) {
    event.stopPropagation();
});

var input = document.querySelector('.menu_audio input');
var menuAudio = document.querySelector('.menu_audio')

menuAudio.classList.add("transition")
input.addEventListener("input", menu_audio) 

function menu_audio(){
    if (input.checked) {
        menuAudio.classList.add('menuAudio_aberto')
    } else {
        menuAudio.classList.remove('menuAudio_aberto')
    }
}