// let shapes = document.querySelectorAll('.shape')

// function animateGlass(selector) {
//     for (let i = 0; i < selector.length; i++) {
//         console.log(selector[i].classList.contains('xyz-in'));
//         if (selector[i].classList.contains('xyz-in')) {
//             selector[i].classList.remove('xyz-in')
//             selector[i].classList.add('xyz-out')
//         } else {
//             selector[i].classList.remove('xyz-out')
//             selector[i].classList.add('xyz-in')
//         }
//     }

// }


// setInterval(() => {
//     animateGlass(shapes)
// }, 2000);

const glass = document.querySelector("#glass");

function animateGlass(selector) {
  if (selector.classList.contains("xyz-in")) {
    selector.classList.remove("xyz-in");
    selector.classList.add("xyz-out");
  } else {
    selector.classList.remove("xyz-out");
    selector.classList.add("xyz-in");
  }
}

setInterval(() => {
  animateGlass(glass);
}, 2000)
