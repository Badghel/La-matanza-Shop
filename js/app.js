const toggle = document.querySelector('.menu-icon');
toggle.addEventListener('click', function () {
document.getElementById('nav').classList.toggle('active')
})

const seccion = document.querySelector('.seccion-menu');
seccion.addEventListener('click', function() {
    document.getElementById('nav-2').classList.toggle('activado');
})