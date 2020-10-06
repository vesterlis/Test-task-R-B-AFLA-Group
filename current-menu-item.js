let licenseItems = document.querySelectorAll('.license__item');

function removeActiveClasses() {
    licenseItems.forEach(function (licenseItem) {
        licenseItem.classList.remove('license__item--active');
    });
}

licenseItems.forEach(function (licenseItem) {
    let licenseRadio = licenseItem.querySelector('.license__radio');

    licenseRadio.onchange = function () {
        removeActiveClasses();

        if (!licenseItem.classList.contains('license__item--active')) {
            licenseItem.classList.add('license__item--active');
        }
    };
});