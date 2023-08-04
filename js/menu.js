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


// input type file 

var Input = document.getElementById('input_foto');
var Label = document.getElementById('label_foto');
var texto_label = document.querySelector(".textolabel")

Input.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function() {
      Label.style.backgroundImage = `url('${reader.result}')`;
    };
    reader.readAsDataURL(file);
    texto_label.style.cssText = "display: none;"
  } else {
    Label.style.backgroundImage = 'none';
  }
});

var fundo_element = document.querySelector(".formularios")
var compartilhar_element = document.querySelector(".compartilhar")
var contato_element = document.querySelector(".contato")
var entrar_element = document.querySelector(".entrar")

function compartilhar(){
    entrar_element.style.cssText = "display: none"
    contato_element.style.cssText = "display: none"
    compartilhar_element.style.cssText = "display: block"
    fundo_element.style.cssText = "display: block"
}

function contato(){
    entrar_element.style.cssText = "display: none"
    contato_element.style.cssText = "display: block"
    compartilhar_element.style.cssText = "display: none"
    fundo_element.style.cssText = "display: block"
}

function entrar(){
    entrar_element.style.cssText = "display: block"
    contato_element.style.cssText = "display: none"
    compartilhar_element.style.cssText = "display: none"
    fundo_element.style.cssText = "display: block"
}

function fechar(){
    entrar_element.style.cssText = "display: none"
    contato_element.style.cssText = "display: none"
    compartilhar_element.style.cssText = "display: none"
    fundo_element.style.cssText ="display: none"
}