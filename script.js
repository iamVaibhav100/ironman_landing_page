const menuToggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');
menuToggle.onclick = function() {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
}