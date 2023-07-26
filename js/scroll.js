window.addEventListener("scroll", function () {
  var elementosHeader = document.querySelectorAll(".scroll_header")
  for (var i = 0; i < elementosHeader.length; i++) {
    elementosHeader[i].classList.toggle("scrollou", window.scrollY > 75);
  }

  var elementosTexto_1 = document.querySelectorAll(".scrollTexto_1")
  for (var i = 0; i < elementosTexto_1.length; i++) {
    elementosTexto_1[i].classList.toggle("scrollou", window.scrollY > 350);
  }
})

