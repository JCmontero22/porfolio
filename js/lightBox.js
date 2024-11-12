 const imagenes = document.querySelectorAll('.imgGallery');
 const imagenesLight = document.querySelector('.agregaImagen');
 const contenedorImagen = document.querySelector('.imagenLight');
 const hamburguer2 = document.querySelector('.iconoMenu');

 imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
 })


 contenedorImagen.addEventListener('click', e=>{
    if (e.target != imagenesLight) {
        contenedorImagen.classList.toggle('show');
        imagenesLight.classList.toggle('showImagen');    
        hamburguer2.style.opacity = '1';
    }
    
 });

 const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorImagen.classList.toggle('show');
    imagenesLight.classList.toggle('showImagen');
    hamburguer2.style.opacity = '0';
 }