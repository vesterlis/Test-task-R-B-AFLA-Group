let license__radio = document.querySelector('.license__radio');
let license__item = document.querySelector('.license__item');


license__radio.onclick = function () {
    if (license__item.classList.contains('license__item--notActive')) {
        license__item.classList.remove('license__item--notActive');
        license__item.classList.add('license__item--active');
    } else {
        license__item.classList.remove('license__item--active');
        license__item.classList.add('license__item--notActive');
    }
};