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

// const searchInput = document.getElementById('searchInput');
// const allTextElements = document.querySelectorAll('.titulo, .subtitulo, .texto');

// searchInput.addEventListener('input', selectText);

// function selectText() {
//   const searchTerm = searchInput.value.trim();
//   if (searchTerm === '') {
//     removeAllSelections();
//     return;
//   }

//   removeAllSelections();

//   allTextElements.forEach(element => {
//     const text = element.textContent;
//     const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi');
//     const matches = text.match(regex);
//     if (matches) {
//       matches.forEach(match => selectInElement(element, match));
//     }
//   });
// }

// function removeAllSelections() {
//   if (window.getSelection) {
//     const selection = window.getSelection();
//     selection.removeAllRanges();
//   }
// }

// function selectInElement(element, searchTerm) {
//   const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi');
//   const matches = element.textContent.match(regex);
//   if (matches) {
//     const range = document.createRange();
//     range.selectNodeContents(element);
//     matches.forEach(match => {
//       const start = element.textContent.indexOf(match);
//       range.setStart(element.firstChild, start);
//       range.setEnd(element.firstChild, start + match.length);
//       const selection = window.getSelection();
//       selection.addRange(range);
//     });
//   }
// }

// function escapeRegExp(string) {
//   return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// }