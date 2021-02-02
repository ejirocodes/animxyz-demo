const glass = document.querySelector('#glass')

function animateGlass(selector) {
    if (selector.classList.contains('xyz-in')) {
        selector.classList.remove('xyz-in')
        selector.classList.add('xyz-out')
    } else {
        selector.classList.remove('xyz-out')
        selector.classList.add('xyz-in')
    }
    
}


setInterval(() => {
    animateGlass(glass)
}, 2000);
