var elementosHeader = document.querySelectorAll(".scroll_header")
var elementosTexto = document.querySelectorAll(".scrollTexto")

for (var i = 0; i < elementosTexto.length; i++) {
  if (elementosTexto[i].offsetTop + elementosTexto[i].offsetHeight / (elementosTexto[i].offsetHeight / 75) < window.innerHeight){
    elementosTexto[i].classList.add("scrollou")
  }}

  window.addEventListener('resize', teste)

function teste(){
  for (var i = 0; i < elementosTexto.length; i++) {
    if (elementosTexto[i].offsetTop + elementosTexto[i].offsetHeight / (elementosTexto[i].offsetHeight / 75) < window.innerHeight){
      elementosTexto[i].classList.add("scrollou")
    }}
}
window.addEventListener("scroll", function () {
  for (var i = 0; i < elementosHeader.length; i++) {
    elementosHeader[i].classList.toggle("scrollou", window.scrollY > 75);
  }

  for (var i = 0; i < elementosTexto.length; i++) {
    elementosTexto[i].classList.toggle("scrollou", window.scrollY > (elementosTexto[i].offsetTop + elementosTexto[i].offsetHeight / (elementosTexto[i].offsetHeight / 75)) - window.innerHeight);
  }
})

console.log(window.innerHeight)
console.log(window.innerWidth)