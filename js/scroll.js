window.addEventListener("scroll", function () {
  var elementosHeader = document.querySelectorAll(".scroll_header")
  for (var i = 0; i < elementosHeader.length; i++) {
    elementosHeader[i].classList.toggle("scrollou", window.scrollY > 75);
  }

  var elementosTexto_1 = document.querySelectorAll(".scrollTexto_1")
  for (var i = 0; i < elementosTexto_1.length; i++) {
    elementosTexto_1[i].classList.toggle("scrollou", window.scrollY > 350);
  }

  var elementosTexto_2 = document.querySelectorAll(".scrollTexto_2")
  for (var i = 0; i < elementosTexto_2.length; i++) {
    elementosTexto_2[i].classList.toggle("scrollou", window.scrollY > 650);
  }

  var elementosTexto_3 = document.querySelectorAll(".scrollTexto_3")
  for (var i = 0; i < elementosTexto_3.length; i++) {
    elementosTexto_3[i].classList.toggle("scrollou", window.scrollY > 1050);
  } 

  var elementosTexto_4 = document.querySelectorAll(".scrollTexto_4")
  for (var i = 0; i < elementosTexto_4.length; i++) {
    elementosTexto_4[i].classList.toggle("scrollou", window.scrollY > 1550);
  } 

  var elementosTexto_5 = document.querySelectorAll(".scrollTexto_5")
  for (var i = 0; i < elementosTexto_5.length; i++) {
    elementosTexto_5[i].classList.toggle("scrollou", window.scrollY > 1950);
  } 

  var elementosTexto_6 = document.querySelectorAll(".scrollTexto_6")
  for (var i = 0; i < elementosTexto_6.length; i++) {
    elementosTexto_6[i].classList.toggle("scrollou", window.scrollY > 2050);
  }

  var elementosTexto_7 = document.querySelectorAll(".scrollTexto_7")
  for (var i = 0; i < elementosTexto_7.length; i++) {
    elementosTexto_7[i].classList.toggle("scrollou", window.scrollY > 2100);
  }
})

