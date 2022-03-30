const btnMobile = document.getElementById('btn-mobile');

function toogleMenu (){

    const nav = document.getElementById('nav');
    nav.classList.toggle('active')

}

btnMobile.addEventListener('click', toogleMenu);



//galeria
document.querySelectorAll('.image-container img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector( '.popup-image').style.display = 'block';
        document.querySelector( '.popup-image img').src = image.getAttribute('src');
    }
});
document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector( '.popup-image').style.display = 'none';
}