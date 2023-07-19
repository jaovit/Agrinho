window.addEventListener("scroll", function() {
    var elementos = document.querySelectorAll(".scroll")
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].classList.toggle("scrollou", window.scrollY > 33);
      }
})

