




var checkbox = document.querySelector('#check');
var navbarLateral = document.querySelector('.ul_navbar');
checkbox.checked = true;

function verificaCheckbox() {
    if(checkbox.checked) {
        navbarLateral.style = 'transform: translateX(0);';
    }

    else {
        navbarLateral.style = 'transform: translateX(-110%);';
    }
}