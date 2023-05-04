let header = document.getElementById('header');

// let nube1 = document.getElementById('nube1');
// let fondo_transparente = document.getElementById('fondo_transparente');
// let nube2 = document.getElementById('nube2');
// let fondo = document.getElementById('fondo');
// let viento = document.getElementById('viento');
// let persona = document.getElementById('persona');
// let slogan = document.getElementById('slogan');

let prota1 = document.getElementById('prota1');
let prota2 = document.getElementById('prota2');

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    prota2.style.marginLeft = value * 0.7 + 'px';
    prota1.style.left = value * -0.7 + 'px';
})

const navigation = document.querySelector('nav');

document.querySelector('.menu').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}