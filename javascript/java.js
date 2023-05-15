let header = document.getElementById('header');


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
