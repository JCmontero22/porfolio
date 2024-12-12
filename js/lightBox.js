   const imagenes = document.querySelectorAll('.logoSkills');
   const imagenesLight = document.querySelector('.agregaImagen');
   const contenedorImagen = document.querySelector('.imagenLight');
   const hamburguer2 = document.querySelector('.iconoMenu');

   imagenes.forEach(imagen =>{
      imagen.addEventListener('click', ()=>{
         aparecerImagen(imagen.getAttribute('src'), imagen.getAttribute('id'));
      });
            
   });


   contenedorImagen.addEventListener('click', e=>{
      if (e.target != imagenesLight) {
         contenedorImagen.classList.toggle('show');
         imagenesLight.classList.toggle('showImagen');    
         /* hamburguer2.style.opacity = '1'; */
         $("#menuIcono").show();
      }
      
   });

   const aparecerImagen = (imagen, nombre)=>{    

      imagenesLight.src = imagen;
      contenedorImagen.classList.toggle('show');
      imagenesLight.classList.toggle('showImagen');
      $("#menuIcono").hide();

      if (nombre == 'html' || nombre == 'css' || nombre == 'bootstrap' || nombre == 'javaScript' || nombre == 'jquery' || nombre == 'ajax' || nombre == 'php' || nombre == 'mySql' || nombre == 'poo') {
         $("#tiempo").html('5 Años');
      }

      if (nombre == 'angular' || nombre == 'laravel') {
         $("#tiempo").html('2 Años');
      }

      if (nombre == 'sqlServe' || nombre == 'gitHub') {
         $("#tiempo").html('3 Años');
      }

   }